export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5ff9c382e12eb14c60d15f81',
                  title: 'Sanity Studio',
                  name: 'sanity-sapper-blog-studio-etyeuq44',
                  apiId: 'bceef9b1-2594-4760-99c6-5ee7b926f5e6'
                },
                {
                  buildHookId: '5ff9c3830b76294076030ba7',
                  title: 'Blog Website',
                  name: 'sanity-sapper-blog-web-xt5qxx7s',
                  apiId: '1fc98a97-c273-4a5c-a6bc-b5b3a8a81e7f'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/ali-yasin/sanity-sapper-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-sapper-blog-web-xt5qxx7s.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
