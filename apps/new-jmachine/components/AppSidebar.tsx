'use client';

import {
  SidebarRoot,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  SidebarGroupLabel,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  Button,
  SidebarInput,
  SidebarMenuItem,
  // SidebarMenuAction,
  SidebarGroupAction,
  // SidebarMenuBadge,
  // SidebarMenuSkeleton,
} from '@common/ui';
import { HomeIcon, PlusIcon } from '@common/ui/icons';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { MenuItemType } from '../services/common/getMenusFetch';

export function AppSidebar({ menuData }: { menuData?: MenuItemType[] }) {
  const path = usePathname();

  return (
    <SidebarRoot collapsible="icon">
      <SidebarHeader className="shrink-0 items-center h-12 bg-juiPrimary/50">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <Link href="/">
                <Image src="/images/avatar-slack.png" alt="main" width={32} height={32} />
                <Button variant="gradient">TEST</Button>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        {/* 일반 그룹 */}
        <SidebarGroup>
          <SidebarGroupLabel>장명수 사이드바 일반</SidebarGroupLabel>
          <SidebarGroupAction title="Add Project">
            <PlusIcon /> <span className="sr-only">Add Project</span>
          </SidebarGroupAction>
          <SidebarGroupContent>
            <SidebarMenu>
              {!!menuData?.length &&
                menuData?.map((menu) => (
                  <SidebarMenuItem key={menu.code}>
                    <SidebarMenuButton asChild tooltipContents={menu.title} isActive={menu.href === path}>
                      <Link data-slot="button" href={menu.href}>
                        {/* {menu.icon} */}
                        <HomeIcon />
                        <span>{menu.title}</span>
                      </Link>
                    </SidebarMenuButton>
                    {/* <SidebarMenuAction showOnHover>
                      <ListIcon /> <span className="sr-only">Add Project</span>
                    </SidebarMenuAction> */}
                  </SidebarMenuItem>
                ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <div className="p-4">
          <SidebarInput />
        </div>
      </SidebarFooter>
    </SidebarRoot>
  );
}
