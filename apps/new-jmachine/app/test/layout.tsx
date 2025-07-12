import { ReactNode } from 'react';
import { SidebarInset, SidebarProvider, SidebarTrigger, Toaster } from '@common/ui';

import { AppSidebar } from '../../components/Sidebar/AppSidebar';
import { MainContent } from '../../components/MainContent';
import ThemeToggle from '../../components/ThemeToggle';
import { MenuItemType } from '../../services/common/getMenusFetch';

export default function SidebarLayout({ children }: { children: ReactNode }) {
  const menuData: MenuItemType[] = [
    {
      href: '/test/case1',
      icon: 'Scenario',
      title: '서버렌더링',
      code: 'M010100',
      type: 'NAV',
    },
    {
      href: '/test/case2',
      icon: 'Scenario',
      title: 'use()서버렌더링',
      code: 'M010200',
      type: 'NAV',
    },
    {
      href: '/test/case3',
      icon: 'Scenario',
      title: 'useQuery+initalData',
      code: 'M010300',
      type: 'NAV',
    },
    {
      href: '/test',
      icon: 'Scenario',
      title: 'prefetch',
      code: 'M010400',
      type: 'NAV',
      children: [
        {
          href: '/test/case4',
          icon: 'Scenario',
          title: 'useQuery+prefetch',
          code: 'M010101',
          type: 'NAV',
        },
      ],
    },
  ];

  // const menuData: MenuItemType[] = [
  //   {
  //     href: '/detect',
  //     icon: 'Detect',
  //     title: '탐지/대응',
  //     code: 'M010000',
  //     type: 'NAV',
  //     children: [
  //       {
  //         href: '/test/case1',
  //         icon: 'Scenario',
  //         title: '서버렌더링',
  //         code: 'M010100',
  //         type: 'NAV',
  //       },
  //       {
  //         href: '/test/case2',
  //         icon: 'Scenario',
  //         title: 'use()서버렌더링',
  //         code: 'M010200',
  //         type: 'NAV',
  //       },
  //       {
  //         href: '/test/case3',
  //         icon: 'Scenario',
  //         title: 'useQuery+initalData',
  //         code: 'M010300',
  //         type: 'NAV',
  //       },
  //       {
  //         href: '/test/case4',
  //         icon: 'Scenario',
  //         title: 'useQuery+prefetch',
  //         code: 'M010400',
  //         type: 'NAV',
  //       },
  //     ],
  //   },
  // ];

  // const menuData: MenuItemType[] = [
  //   {
  //     href: '/test',
  //     icon: 'Detect',
  //     title: '탐지/대응',
  //     code: 'M010000',
  //     type: 'NAV',
  //     children: [
  //       {
  //         href: '/test/case1',
  //         icon: 'Scenario',
  //         title: '시나리오',
  //         code: 'M010100',
  //         type: 'NAV',
  //       },
  //       {
  //         href: '/detect/playbook',
  //         icon: 'AiPlaybook',
  //         title: 'AI 플레이북',
  //         code: 'M010300',
  //         type: 'NAV',
  //       },
  //       {
  //         href: '/detect/event',
  //         icon: 'EventAnalysis',
  //         title: '이벤트 분석/대응',
  //         code: 'M010200',
  //         type: 'NAV',
  //       },
  //       {
  //         href: '/detect/explanation',
  //         icon: 'ExplanationMenu',
  //         title: '소명처리 현황',
  //         code: 'M010400',
  //         type: 'NAV',
  //       },
  //     ],
  //   },
  //   {
  //     href: '/analysis',
  //     icon: 'Analysis',
  //     title: '분석',
  //     code: 'M020000',
  //     type: 'NAV',
  //     children: [
  //       {
  //         href: '/analysis/bigdata',
  //         icon: 'BigDataSearch',
  //         title: '빅데이터 검색',
  //         code: 'M020100',
  //         type: 'NAV',
  //       },
  //       {
  //         href: '/analysis/affinity',
  //         icon: 'Layer',
  //         title: 'AI 관계도 분석',
  //         code: 'M020800',
  //         type: 'NAV',
  //       },
  //       {
  //         href: '/analysis/timeSeries',
  //         icon: 'LineCircle',
  //         title: '시계열 분석',
  //         code: 'M020900',
  //         type: 'NAV',
  //       },
  //       {
  //         href: '/analysis/similarity',
  //         icon: 'AiSimilarity',
  //         title: 'AI 유사도 분석',
  //         code: 'M021000',
  //         type: 'NAV',
  //         children: [
  //           {
  //             href: '/analysis/similarity/target',
  //             icon: '',
  //             title: '대상별 유사도 탐지',
  //             code: 'M021100',
  //             type: 'NAV',
  //           },
  //           {
  //             href: '/analysis/similarity/document',
  //             icon: '',
  //             title: '문서유사도기반탐지',
  //             code: 'M020600',
  //             type: 'NAV',
  //           },
  //         ],
  //       },
  //     ],
  //   },
  //   {
  //     href: '/dashboard',
  //     icon: 'Dashboard',
  //     title: '대시보드',
  //     code: 'M030000',
  //     type: 'NAV',
  //     children: [
  //       {
  //         href: 'https://192.168.0.110:3031/dashboard',
  //         icon: 'AllDashboard',
  //         title: '전체 대시보드',
  //         code: 'M039000',
  //         type: 'NAV',
  //       },
  //     ],
  //   },
  //   {
  //     href: '/response',
  //     icon: 'ResponseManage',
  //     title: '대응 관리',
  //     code: 'M050000',
  //     type: 'NAV',
  //     children: [
  //       {
  //         href: '/response/auto',
  //         icon: 'AutoResponse',
  //         title: 'AI 자동 대응 관리',
  //         code: 'M050100',
  //         type: 'NAV',
  //         children: [
  //           {
  //             href: '/response/auto/learning',
  //             icon: '',
  //             title: '시나리오 학습 관리',
  //             code: 'M050101',
  //             type: 'NAV',
  //           },
  //         ],
  //       },
  //     ],
  //   },
  //   {
  //     href: '/system',
  //     icon: 'SystemManage',
  //     title: '시스템 관리',
  //     code: 'M040000',
  //     type: 'NAV',
  //     children: [
  //       {
  //         href: '/system/log',
  //         icon: 'LogManage',
  //         title: '로그 관리',
  //         code: 'M040100',
  //         type: 'NAV',
  //       },
  //       {
  //         href: '/system/explanation',
  //         icon: 'Explanation',
  //         title: '소명 관리',
  //         code: 'M040500',
  //         type: 'NAV',
  //         children: [
  //           {
  //             href: '/system/explanation/approvalProcess',
  //             icon: '',
  //             title: '승인 절차 관리',
  //             code: 'M040501',
  //             type: 'NAV',
  //           },
  //           {
  //             href: '/system/explanation/receiver',
  //             icon: '',
  //             title: '수신자 관리',
  //             code: 'M040502',
  //             type: 'NAV',
  //           },
  //           {
  //             href: '/system/explanation/template',
  //             icon: '',
  //             title: '소명 템플릿 관리',
  //             code: 'M040503',
  //             type: 'NAV',
  //           },
  //         ],
  //       },
  //       {
  //         href: '/system/report',
  //         icon: 'Report',
  //         title: '보고서',
  //         code: 'M040200',
  //         type: 'NAV',
  //         children: [
  //           {
  //             href: '/system/report/template',
  //             icon: '',
  //             title: '보고서 템플릿',
  //             code: 'M040201',
  //             type: 'NAV',
  //           },
  //           {
  //             href: '/system/report/management',
  //             icon: '',
  //             title: '보고서 관리',
  //             code: 'M040202',
  //             type: 'NAV',
  //           },
  //           {
  //             href: '/system/report/sendhistory',
  //             icon: '',
  //             title: '보고서 전송이력',
  //             code: 'M040203',
  //             type: 'NAV',
  //           },
  //         ],
  //       },
  //       {
  //         href: '/system/detectinfo',
  //         icon: 'DetectInfo',
  //         title: '탐지 정보 관리',
  //         code: 'M040300',
  //         type: 'NAV',
  //         children: [
  //           {
  //             href: '/system/detectinfo/target',
  //             icon: '',
  //             title: '탐지 대상 관리',
  //             code: 'M040301',
  //             type: 'NAV',
  //           },
  //           {
  //             href: '/system/detectinfo/highrisk',
  //             icon: '',
  //             title: '고위험군 관리',
  //             code: 'M040302',
  //             type: 'NAV',
  //           },
  //           {
  //             href: '/system/detectinfo/history',
  //             icon: '',
  //             title: '탐지이력 관리',
  //             code: 'M040303',
  //             type: 'NAV',
  //           },
  //         ],
  //       },
  //       {
  //         href: '/system/config',
  //         icon: 'SettingManage',
  //         title: '설정 관리',
  //         code: 'M040400',
  //         type: 'NAV',
  //         children: [
  //           {
  //             href: '/system/config/referenceinfo',
  //             icon: '',
  //             title: '기준 정보 설정',
  //             code: 'M040401',
  //             type: 'NAV',
  //           },
  //           {
  //             href: '/system/config/role',
  //             icon: '',
  //             title: '권한 설정',
  //             code: 'M040402',
  //             type: 'NAV',
  //           },
  //           {
  //             href: '/system/config/daemon',
  //             icon: '',
  //             title: '데몬 설정',
  //             code: 'M040403',
  //             type: 'NAV',
  //           },
  //           {
  //             href: '/system/config/responseStatus',
  //             icon: '',
  //             title: '대응상태 설정',
  //             code: 'M040407',
  //             type: 'NAV',
  //           },
  //           {
  //             href: '/system/config/template',
  //             icon: '',
  //             title: '템플릿 관리',
  //             code: 'M040404',
  //             type: 'NAV',
  //           },
  //           {
  //             href: '/system/config/externalalarm',
  //             icon: '',
  //             title: '외부 알림 설정',
  //             code: 'M040405',
  //             type: 'NAV',
  //           },
  //           {
  //             href: '/system/config/license',
  //             icon: '',
  //             title: '라이선스 현황',
  //             code: 'M040406',
  //             type: 'NAV',
  //           },
  //         ],
  //       },
  //     ],
  //   },
  // ];

  return (
    <SidebarProvider defaultOpen={false}>
      <AppSidebar menuData={menuData} />
      <SidebarInset>
        <header className="sticky top-0 z-1 flex h-12 shrink-0 items-center gap-2 bg-juiBackground-input light:border-b light:border-b-juiBorder-primary p-2">
          <SidebarTrigger variant="primary" className="aspect-square p-0 rounded-full" />
          <h1 className="font-bold">header</h1>

          <div className="flex gap-1 ml-auto">
            <ThemeToggle />
          </div>
        </header>
        <MainContent contentType="flex">{children}</MainContent>
      </SidebarInset>
      <Toaster position="top-center" closeButton duration={Infinity} />
    </SidebarProvider>
  );
}
