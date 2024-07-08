import {viteBundler} from '@vuepress/bundler-vite'
import {defaultTheme} from '@vuepress/theme-default'
import {defineUserConfig} from 'vuepress'
import {searchPlugin} from "@vuepress/plugin-search";

export default defineUserConfig({
    title: 'Lucky',
    head: [
        [
            'link', {rel: 'icon', href: '/lucky.ico'}
        ]
    ],
    bundler: viteBundler(),
    theme: defaultTheme({
        logo: '/lucky.ico',
        plugins: [
            searchPlugin({
                // 配置项
            }),
        ],
        navbar: [
            {text: '首页', link: '/',},
            {
                text: '文档',
                children: [
                    {
                        text: '测试版',
                        children: [{text: 'V2.1.1', link: '/version/1.5.36/spring_boot_install/',}],
                    },
                    {
                        text: '稳定版',
                        children: [{text: '暂无', link: '/',}],
                    },
                ],
            },

            {
                text: '社区',
                children: [
                    {
                        text: '加入群聊',
                        link: '/'
                    },
                    {
                        text: '联系作者',
                        link: '/'
                    },
                ],
            },

            {
                text: '源码',
                children: [
                    {
                        text: '框架源码',
                        children: [
                            {
                                text: 'http-client',
                                link: 'https://github.com/lucklike/luckliy/tree/main/lucky-httpclient',
                            },
                            {
                                text: 'lucky-httpclient-spring-boot-starter',
                                link: 'https://github.com/lucklike/lucky-spring/tree/main/lucky-httpclient-spring-boot-starter',
                            }
                        ],
                    },
                    {
                        text: '示例项目',
                        children: [
                            {
                                text: 'lucky-httpclient-example',
                                link: 'https://github.com/lucklike/lucky-httpclient-example',
                            }
                        ],
                    },
                ]
            },
        ],
        sidebar: [
            {
                title: 'Group 1',   // 必要的
                path: '/foo/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
                collapsable: true, // 可选的, 默认值是 true,
                sidebarDepth: 1,    // 可选的, 默认值是 1
                children: [
                    '/'
                ]
            },
            {
                title: 'Group 2',
                children: [ /* ... */ ],
                initialOpenGroupIndex: -1 // 可选的, 默认值是 0
            }
        ]
    }),
})