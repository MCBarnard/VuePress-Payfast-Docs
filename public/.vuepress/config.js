module.exports = {
    base: 'public',
    title: 'PayFast Documentation',
    description: 'aa',
    head: [
        ['link', { rel: "icon", type: "image/png", sizes: "32x32", href: "/images/PayFast Coins.png"}],
        ['link', { rel: "icon", type: "image/png", sizes: "16x16", href: "/images/PayFast Coins.png"}]
    ],
    themeConfig: {
        smoothScroll: true,
        nav: [
            { text: 'Blogs', link: '/blog/' },
            { text: 'Guide', link: '/guide/' },
            { text: 'Sandbox', link: 'https://sandbox.payfast.co.za' },
            { text: 'PayFast Home', link: 'https://www.payfast.co.za' }
        ],
        sidebar: {
            '/guide/': [
                '',
                'apiIntegration',
                'splitPayments',
                'sysInfo',
                'testsAndTools',
                'pci',
                'faq',
            ]
        },
        logo: '/images/PayFast Logo Colour.svg',
    }
}
