// schemas/Blogs

export default {
  name: 'blogs',
  title: 'Blogs',
  type: 'document',
  initalValue: {
    accepted: false,
  },
  fields: [
    {
      name: 'accepted',
      title: 'Accepted',
      type: 'boolean',
    },
    {
      name: 'authorName',
      title: 'Author Name',
      type: 'string',
    },
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'category',
      title: 'Category',
      type: 'string',
    },
    {
      name: 'imgUrl',
      title: 'Imgage Url',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'body',
      title: 'Body',
      type: 'string',
    },
    {
      name: 'date',
      title: 'Date',
      type: 'string',
    },
  ],
}
