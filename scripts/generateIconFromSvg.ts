import fs from 'fs';
import path from 'path';

interface IconGenerationOptions {
  svgContent: string;
  iconName: string;
  viewBox?: string;
  isStrokeIcon?: boolean;
}

function extractPathsFromSvg(svgContent: string): string {
  // SVG에서 path 요소들을 추출
  const pathRegex = /<path[^>]*\/?>/g;
  const paths = svgContent.match(pathRegex);

  if (!paths) {
    throw new Error('No path elements found in SVG');
  }

  // path 요소들을 JSX 형태로 변환
  const jsxPaths = paths.map((path) => {
    // SVG 속성을 JSX 속성으로 변환
    let jsxPath = path
      .replace(/stroke-width/g, 'strokeWidth')
      .replace(/stroke-linecap/g, 'strokeLinecap')
      .replace(/stroke-linejoin/g, 'strokeLinejoin')
      .replace(/fill-rule/g, 'fillRule')
      .replace(/clip-rule/g, 'clipRule');

    // 자체 닫는 태그가 아닌 경우 닫는 태그 추가
    if (!jsxPath.endsWith('/>')) {
      jsxPath = jsxPath.replace('>', ' />');
    }

    return jsxPath;
  });

  return jsxPaths.join('\n    ');
}

function detectViewBox(svgContent: string): string {
  const viewBoxRegex = /viewBox\s*=\s*["']([^"']+)["']/;
  const match = svgContent.match(viewBoxRegex);
  return match ? match[1] : '0 0 24 24';
}

function detectStrokeIcon(svgContent: string): boolean {
  // stroke 속성이 있고 fill이 none이거나 stroke 관련 속성이 있는 경우
  return svgContent.includes('stroke=') && (svgContent.includes('fill="none"') || svgContent.includes('stroke-width'));
}

function generateIconFile(options: IconGenerationOptions): string {
  const { svgContent, iconName, viewBox, isStrokeIcon } = options;

  // SVG에서 path 추출
  const paths = extractPathsFromSvg(svgContent);

  // viewBox와 stroke 여부 자동 감지
  const detectedViewBox = detectViewBox(svgContent);
  const detectedIsStroke = detectStrokeIcon(svgContent);

  const finalViewBox = viewBox || detectedViewBox;
  const finalIsStroke = isStrokeIcon !== undefined ? isStrokeIcon : detectedIsStroke;

  // CreateIcon 호출 부분 생성
  const createIconProps = finalIsStroke
    ? `viewBox: '${finalViewBox}',
    fill: 'none',
    strokeWidth: 2,
    stroke: 'currentColor',`
    : `viewBox: '${finalViewBox}',`;

  return `import { type IconProps } from '../types';
import CreateIcon from '../CreateIcon';

const ${iconName}Path = (
  <>
    ${paths}
  </>
);

export const ${iconName} = (props: IconProps) =>
  CreateIcon({
    paths: ${iconName}Path,
    ${createIconProps}
    ...props,
  });
`;
}

function generatePreviewImage(svgContent: string, viewBox: string, isStrokeIcon: boolean): string {
  // SVG에서 path 요소들만 추출
  const pathRegex = /<path[^>]*\/?>/g;
  const paths = svgContent.match(pathRegex);

  if (!paths) {
    throw new Error('No path elements found in SVG');
  }

  // path 요소들을 정리
  const cleanPaths = paths.map((path) => {
    // 불필요한 속성들 제거 (stroke, fill 등은 상위에서 관리)
    return path.replace(/\s+(stroke|fill|stroke-width|stroke-linecap|stroke-linejoin)="[^"]*"/g, '');
  });

  const strokeAttributes = isStrokeIcon ? 'fill="none" stroke="white" stroke-width="2"' : 'fill="#fff"';
  const svgWrapped = `<svg xmlns="http://www.w3.org/2000/svg" ${strokeAttributes} width="24" height="24" viewBox="${viewBox}">${cleanPaths.join('')}</svg>`;

  return Buffer.from(svgWrapped).toString('base64');
}

function addPreviewComment(iconContent: string, iconName: string, previewBase64: string): string {
  const commentBlock = `/**
 * @component @name ${iconName}
 * @description Custom SVG icon component rendering.
 *
 * @preview ![img](data:image/svg+xml;base64,${previewBase64})
 *
 * @param {IconProps} props - Icon props and valid SVG attributes.
 * @returns {JSX.Element} SVG icon component.
 */
`;

  return iconContent.replace(/export const \w+ = \(props: IconProps\) =>/, `${commentBlock}$&`);
}

async function generateIcon(options: IconGenerationOptions): Promise<void> {
  const { svgContent, iconName } = options;

  // viewBox와 stroke 여부 자동 감지
  const viewBox = detectViewBox(svgContent);
  const isStrokeIcon = detectStrokeIcon(svgContent);

  // 아이콘 파일 내용 생성
  let iconContent = generateIconFile({
    ...options,
    viewBox,
    isStrokeIcon,
  });

  // preview 이미지 생성
  const previewBase64 = generatePreviewImage(svgContent, viewBox, isStrokeIcon);

  // preview 주석 추가
  iconContent = addPreviewComment(iconContent, iconName, previewBase64);

  // 파일 저장
  const iconDir = path.resolve(__dirname, '../packages/ui/src/icons/Icon');
  const fileName = `${iconName}.tsx`;
  const filePath = path.join(iconDir, fileName);

  await fs.promises.writeFile(filePath, iconContent, 'utf8');

  console.log(`✅ Generated ${fileName}`);
  console.log(`📁 Location: ${filePath}`);
  console.log(`🎨 Type: ${isStrokeIcon ? 'Stroke' : 'Fill'} icon`);
  console.log(`📐 ViewBox: ${viewBox}`);
}

// 사용 예시
async function main() {
  // 예시 SVG와 아이콘 이름
  const exampleSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2v20"/><path d="M8 10H4a2 2 0 0 1-2-2V6c0-1.1.9-2 2-2h4"/><path d="M16 10h4a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-4"/><path d="M8 20H7a2 2 0 0 1-2-2v-2c0-1.1.9-2 2-2h1"/><path d="M16 14h1a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-1"/></svg>`;

  try {
    await generateIcon({
      svgContent: exampleSvg,
      iconName: 'TestIcon',
    });
  } catch (error) {
    console.error('❌ Error generating icon:', error);
  }
}

// 스크립트가 직접 실행될 때만 main 함수 실행
if (require.main === module) {
  main().catch(console.error);
}

export { generateIcon };
export type { IconGenerationOptions };
