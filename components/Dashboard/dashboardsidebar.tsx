"use client"

import type * as React from "react"
import { Home, Settings, Package, ShoppingCart, Users, BarChart3, HelpCircle } from "lucide-react"
import { MdDarkMode } from "react-icons/md";
import { GrSun } from "react-icons/gr";
import { useTheme } from "next-themes"
import { TbLayoutSidebarLeftCollapseFilled } from "react-icons/tb";
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarRail,
} from "@/components/ui/sidebar"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Switch } from "@/components/ui/switch"
import Link from "next/link"
import { Collapsible, CollapsibleTrigger, CollapsibleContent } from "@/components/ui/collapsible" // Import Collapsible components

const data = {
    company: {
        name: "Kanky Store",
        logo: "KS",
    },
    navMain: [
        {
            title: "GENERAL",
            items: [
                {
                    title: "Dashboard",
                    url: "/dashboard",
                    icon: Home,
                },
                {
                    title: "Product (119)",
                    url: "/products",
                    icon: Package,
                    items: [
                        { title: "Sneakers", url: "/products/sneakers" },
                        { title: "Jacket", url: "/products/jacket" },
                        { title: "T-Shirt", url: "/products/t-shirt" },
                        { title: "Bag", url: "/products/bag" },
                    ],
                },
                {
                    title: "Transaction (441)",
                    url: "/orders",
                    icon: ShoppingCart,
                },
                {
                    title: "Customers",
                    url: "/customers",
                    icon: Users,
                },
                {
                    title: "Sales Report",
                    url: "/reports",
                    icon: BarChart3,
                },
            ],
        },
        {
            title: "TOOLS",
            items: [
                {
                    title: "Account & Settings",
                    url: "/settings",
                    icon: Settings,
                },
                {
                    title: "Help",
                    url: "/help",
                    icon: HelpCircle,
                },
            ],
        },
    ],
    user: {
        name: "Guy Hawkins",
        email: "guy@example.com",
        avatar: "/placeholder-user.jpg",
        role: "Admin",
    },
}

export function DashboardSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
    const { theme, setTheme } = useTheme()

    return (
        <Sidebar variant="inset" {...props}>
            <SidebarHeader>
                <SidebarMenu>
                    <SidebarMenuItem className="flex flex-row space-x-4 m-4">
                        <h1 className="font-bold text-2xl">||NexBoard</h1>
                        <TbLayoutSidebarLeftCollapseFilled className="h-6 w-6 " />
                    </SidebarMenuItem>
                    <SidebarMenuItem>
                        <SidebarMenuButton size="lg" asChild>
                            <Link href="/dashboard">
                                <div className="flex aspect-square size-8 items-center justify-center rounded-full bg-sidebar-primary text-sidebar-primary-foreground">
                                    <span className="font-bold">{data.company.logo}</span>
                                </div>
                                <div className="grid flex-1 text-left text-sm leading-tight">
                                    <span className="truncate text-xs">Company</span>
                                    <span className="truncate font-semibold">{data.company.name}</span>
                                </div>
                            </Link>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarHeader>
            <SidebarContent>
                {data.navMain.map((group) => (
                    <SidebarGroup key={group.title}>
                        <SidebarGroupLabel>{group.title}</SidebarGroupLabel>
                        <SidebarGroupContent>
                            <SidebarMenu>
                                {group.items.map((item) => (
                                    <SidebarMenuItem key={item.title}>
                                        {item.items ? (
                                            <Collapsible defaultOpen className="group space-y-1">
                                                <CollapsibleTrigger asChild>
                                                    <SidebarMenuButton className="flex items-center gap-2">
                                                        <item.icon className="h-4 w-4" />
                                                        <span className="font-semibold">{item.title}</span>
                                                    </SidebarMenuButton>
                                                </CollapsibleTrigger>
                                                <CollapsibleContent className="ml-4 border-l border-muted pl-4 space-y-1">
                                                    {item.items.map((subItem) => (
                                                        <SidebarMenuItem key={subItem.title}>
                                                            <SidebarMenuButton asChild>
                                                                <Link
                                                                    href={subItem.url}
                                                                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                                                                >
                                                                    {subItem.title}
                                                                </Link>
                                                            </SidebarMenuButton>
                                                        </SidebarMenuItem>
                                                    ))}
                                                </CollapsibleContent>
                                            </Collapsible>
                                        ) : (
                                            <SidebarMenuButton asChild>
                                                <Link href={item.url} className="flex items-center gap-2">
                                                    <item.icon className="h-4 w-4" />
                                                    <span>{item.title}</span>
                                                </Link>
                                            </SidebarMenuButton>
                                        )}
                                    </SidebarMenuItem>
                                ))}
                            </SidebarMenu>
                        </SidebarGroupContent>
                    </SidebarGroup>
                ))}
            </SidebarContent>

            <SidebarFooter>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <div className="flex items-center justify-between p-2">
                            <MdDarkMode />
                            <GrSun />
                            <span className="text-sm">Dark Mode</span>
                            <Switch checked={theme === "dark"} onCheckedChange={(checked) => setTheme(checked ? "dark" : "light")} />
                        </div>
                    </SidebarMenuItem>
                    <SidebarMenuItem>
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <SidebarMenuButton
                                    size="lg"
                                    className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
                                >
                                    <Avatar className="h-8 w-8 rounded-lg">
                                        <AvatarImage src={data.user.avatar || "/placeholder.svg"} alt={data.user.name} />
                                        <AvatarFallback className="rounded-lg">GH</AvatarFallback>
                                    </Avatar>
                                    <div className="grid flex-1 text-left text-sm leading-tight">
                                        <span className="truncate font-semibold">{data.user.name}</span>
                                        <span className="truncate text-xs">{data.user.role}</span>
                                    </div>
                                </SidebarMenuButton>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent
                                className="w-[--radix-dropdown-menu-trigger-width] min-w-56 rounded-lg"
                                side="bottom"
                                align="end"
                                sideOffset={4}
                            >
                                <DropdownMenuItem>
                                    <Settings className="h-4 w-4 mr-2" />
                                    Account Settings
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                    <HelpCircle className="h-4 w-4 mr-2" />
                                    Support
                                </DropdownMenuItem>
                                <DropdownMenuItem>Sign out</DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarFooter>
            <SidebarRail />
        </Sidebar>
    )
}
