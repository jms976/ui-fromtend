import { fetchServerApi } from '../../../lib/fetch/serverApi';
import Menus from './component/Menus';

type CodeRequestBody = {
  pcmcd: string;
};

export default async function DetectPage() {
  const codesData = await fetchServerApi<{ cmcdNm: string }[], CodeRequestBody>('/get/codes', { pcmcd: '' });

  return (
    <div>
      {codesData.data?.[5]?.cmcdNm ?? '-'}
      <Menus />
    </div>
  );
}
