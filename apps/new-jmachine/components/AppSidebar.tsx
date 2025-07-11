'use client';

import {
  SidebarRoot,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  Button,
  SidebarInput,
  SidebarMenuItem,
  // SidebarMenuAction,
  SidebarCollasibleGroup,
  SidebarMenuSub,
  SidebarMenuSubItem,
  SidebarMenuSubButton,
  SidebarMenuAction,
  // SidebarMenuBadge,
  // SidebarMenuSkeleton,
} from '@common/ui';
import { ExpansionContentIcon, ExternalLinkIcon, HomeIcon, TagIcon } from '@common/ui/icons';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { MenuItemType } from '../services/common/getMenusFetch';
import { cn } from '@common/ui/lib/utils';

export function AppSidebar({ menuData }: { menuData?: MenuItemType[] }) {
  const path = usePathname();

  const RenderMenuItems = ({ items, depth = 0 }: { items: MenuItemType[]; depth?: number }) => {
    return (
      <>
        {items.map((item) =>
          item.children?.length ? (
            <SidebarCollasibleGroup
              key={item.code}
              collasibleTitle={item.title}
              collasibleIcon={depth > 0 ? TagIcon : ExpansionContentIcon}
              tooltipContents={item.title}
              extendType={depth > 0 ? 'plus' : 'chev'}
              depth={depth}
              triggerClassName={cn('h-12', depth > 0 && 'h-9 pl-5 text-juiText-secondary hover:text-juiText-primary')}>
              <SidebarGroupContent className={cn('bg-juiGrey-100', depth > 0 && 'bg-transparent')}>
                <SidebarMenuSub isFloat className={cn('p-0 m-0')}>
                  <RenderMenuItems items={item.children} depth={depth + 1} />
                </SidebarMenuSub>
              </SidebarGroupContent>
            </SidebarCollasibleGroup>
          ) : (
            <SidebarMenuSubItem key={item.code}>
              <SidebarMenuSubButton
                asChild
                isActive={path === item.href}
                className={cn(
                  'h-9 pl-5 text-juiText-secondary hover:text-juiText-primary data-[active=true]:text-juiText-primary',
                  depth > 1 && 'pl-10 text-xs h-8',
                )}>
                <Link data-slot="button" href={item.href}>
                  {depth < 2 && <HomeIcon />}
                  <span>{item.title}</span>
                </Link>
              </SidebarMenuSubButton>
              <SidebarMenuAction showOnHover>
                <ExternalLinkIcon />
                <span className="sr-only">External</span>
              </SidebarMenuAction>
            </SidebarMenuSubItem>
          ),
        )}
      </>
    );
  };

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
        <SidebarGroup>
          {!!menuData?.length && <RenderMenuItems items={menuData} />}
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton>
                  <ExternalLinkIcon />
                  normal Disalbed
                </SidebarMenuButton>
                <SidebarMenuAction showOnHover>
                  <ExternalLinkIcon /> <span className="sr-only">Add Project</span>
                </SidebarMenuAction>
              </SidebarMenuItem>
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
