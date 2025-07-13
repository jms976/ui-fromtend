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

type NavigationItemRendererProps = {
  items: MenuItemType[];
  depth?: number;
  isHover?: boolean;
};

export function NavigationItemRenderer({ items, depth = 0, isHover = false }: NavigationItemRendererProps) {
  const path = usePathname();

  return (
    <SidebarGroup className="p-0">
      <SidebarMenu>
        {items.map((item) => {
          const hasChildren = item.children?.length;

          if (hasChildren) return renderGroupItem({ item, depth, isHover });
          if (depth === 0) return renderRootItem({ item, path });

          return renderSubItem({ item, depth, isHover, path });
        })}
      </SidebarMenu>
    </SidebarGroup>
  );
}

function renderGroupItem({ item, depth, isHover }: { item: MenuItemType; depth: number; isHover?: boolean }) {
  const isTopLevel = depth === 0;
  const Icon = depth > 0 ? TagIcon : BellIcon;

  return (
    <SidebarCollasibleGroup
      key={item.code}
      collapsibleTitle={item.title}
      collapsibleIcon={Icon}
      collapsibleVisible
      extendType={depth > 0 ? 'plus' : 'chev'}
      depth={depth}
      triggerClassName={cn(
        'h-12 pl-4',
        'data-[state=open]:font-bold data-[state=open]:text-juiText-primary',
        '[group:not([data-state=collapsed])]:data-[state=open]:bg-current/5',
        depth > 0 && 'h-9 pl-6 text-juiText-secondary hover:text-juiText-primary',
        isHover && 'pl-4 pr-2',
      )}
      {...(isTopLevel && {
        hoverCardContents: (
          <div className="w-52 bg-juiPrimary light:bg-juiGrey-a200 border-0 rounded-sm rounded-ss-none">
            <span className="flex h-12 px-4 items-center text-sm">{item.title}</span>
            <SidebarGroupContent className="pb-2">
              <SidebarMenuSub isFloat className="p-0 m-0">
                <NavigationItemRenderer items={item.children!} depth={depth + 1} isHover />
              </SidebarMenuSub>
            </SidebarGroupContent>
          </div>
        ),
        hoverCardProps: { sideOffset: 0, closeDelay: 0 },
      })}>
      <SidebarGroupContent
        className={cn('bg-juiGrey-50', depth > 0 && (isHover ? 'bg-juiBackground-input/20' : 'bg-juiGrey-100'))}>
        <SidebarMenuSub isFloat className="p-0 m-0">
          <NavigationItemRenderer items={item.children!} depth={depth + 1} isHover={isHover} />
        </SidebarMenuSub>
      </SidebarGroupContent>
    </SidebarCollasibleGroup>
  );
}

function renderRootItem({ item, path }: { item: MenuItemType; path: string }) {
  return (
    <SidebarMenuItem
      key={item.code}
      className="flex items-center justify-center group-data-[state=expanded]:hover:bg-current/20 group-data-[state=collapsed]:py-2">
      <SidebarMenuButton
        asChild
        tooltipContents={item.title}
        isActive={path === item.href}
        className={cn(`
          h-12 py-2 pl-4
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
  );
}

function renderSubItem({
  item,
  depth,
  isHover,
  path,
}: {
  item: MenuItemType;
  depth: number;
  isHover?: boolean;
  path: string;
}) {
  return (
    <SidebarMenuSubItem key={item.code}>
      <SidebarMenuSubButton
        asChild
        isActive={path === item.href}
        className={cn(
          'h-9 pl-6 text-juiText-secondary hover:text-juiText-primary hover:font-bold data-[active=true]:text-juiText-primary',
          depth > 1 && 'pl-12 text-xs h-8',
          isHover && 'pl-4 pr-2',
          isHover && depth > 1 && 'pl-10',
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
  );
}
