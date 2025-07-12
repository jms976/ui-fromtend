'use client';

import {
  SidebarCollasibleGroup,
  SidebarGroupContent,
  SidebarMenuSub,
  SidebarMenuSubItem,
  SidebarMenuSubButton,
  SidebarMenuAction,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarMenu,
  SidebarGroup,
} from '@common/ui';
import { BellIcon, ExternalLinkIcon, HomeIcon, TagIcon } from '@common/ui/icons';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@common/ui/lib/utils';

import { MenuItemType } from '../../services/common/getMenusFetch';

export function NavigationItemRenderer({
  items,
  depth = 0,
  isHover = false,
}: {
  items: MenuItemType[];
  depth?: number;
  isHover?: boolean;
}) {
  const path = usePathname();

  return (
    <SidebarGroup className="p-0">
      <SidebarMenu>
        {items.map((item) =>
          item.children?.length ? (
            <SidebarCollasibleGroup
              key={item.code}
              collapsibleTitle={item.title}
              collapsibleIcon={depth > 0 ? TagIcon : BellIcon}
              collapsibleVisible
              {...(depth === 0 && {
                hoverCardContents: (
                  <div className={cn('w-52 bg-juiPrimary light:bg-juiGrey-a200 border-0 rounded-sm rounded-ss-none')}>
                    <span className="flex h-12 px-4 items-center text-sm">{item.title}</span>
                    <SidebarGroupContent className="pb-2">
                      <SidebarMenuSub isFloat className={cn('p-0 m-0')}>
                        <NavigationItemRenderer items={item.children} depth={depth + 1} isHover />
                      </SidebarMenuSub>
                    </SidebarGroupContent>
                  </div>
                ),
                hoverCardProps: { sideOffset: 0, closeDelay: 0 },
              })}
              extendType={depth > 0 ? 'plus' : 'chev'}
              depth={depth}
              triggerClassName={cn(
                'h-12',
                'data-[state=open]:font-bold data-[state=open]:text-juiText-primary',
                '[group:not([data-state=collapsed])]:data-[state=open]:bg-current/5',
                depth > 0 && 'h-9 pl-5 text-juiText-secondary hover:text-juiText-primary',
                isHover && 'pl-5 pr-2',
              )}>
              <SidebarGroupContent
                className={cn(
                  'bg-juiGrey-50',
                  depth > 0 && (isHover ? 'bg-juiBackground-input/20' : 'bg-juiGrey-100'),
                )}>
                <SidebarMenuSub isFloat className={cn('p-0 m-0')}>
                  <NavigationItemRenderer items={item.children} depth={depth + 1} isHover={isHover} />
                </SidebarMenuSub>
              </SidebarGroupContent>
            </SidebarCollasibleGroup>
          ) : depth === 0 ? (
            <SidebarMenuItem
              key={item.code}
              className="flex items-center justify-center group-data-[state=expanded]:hover:bg-current/20 group-data-[state=collapsed]:py-2">
              <SidebarMenuButton
                asChild
                tooltipContents={item.title}
                isActive={path === item.href}
                className={cn(`
                  h-12
                  py-2 
                  active:font-bold
                  data-[active=true]:bg-transparent 
                  active:bg-transparent
                  hover:font-bold
                  data-[state=open]:hover:bg-transparent 
                  group-data-[state=collapsed]:[&>svg]:size-5
                  group-data-[state=collapsed]:p-1.5!
                  group-data-[state=collapsed]:hover:bg-juiPrimary
                  group-data-[state=collapsed]:hover:light:bg-juiPrimary/30
                  group-data-[state=collapsed]:data-[active=true]:bg-juiPrimary
                  group-data-[state=collapsed]:data-[active=true]:light:bg-juiPrimary/30
              `)}>
                <Link data-slot="button" href={item.href}>
                  <HomeIcon />
                  <span>{item.title}</span>
                </Link>
              </SidebarMenuButton>
              <SidebarMenuAction className="top-3.5!" showOnHover>
                <ExternalLinkIcon />
                <span className="sr-only">External</span>
              </SidebarMenuAction>
            </SidebarMenuItem>
          ) : (
            <SidebarMenuSubItem key={item.code}>
              <SidebarMenuSubButton
                asChild
                isActive={path === item.href}
                className={cn(
                  'h-9 pl-5 text-juiText-secondary hover:text-juiText-primary hover:font-bold data-[active=true]:text-juiText-primary',
                  depth > 1 && 'pl-10 text-xs h-8',
                  isHover && 'pl-5 pr-2',
                  isHover && depth > 1 && 'pl-8',
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
      </SidebarMenu>
    </SidebarGroup>
  );
}
