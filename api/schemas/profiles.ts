// schemas/Profiles

export default {
  name: 'profiles',
  title: 'Profiles',
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
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'email',
      title: 'Email',
      type: 'string',
    },
    {
      name: 'location',
      title: 'Location',
      type: 'string',
    },
    {
      name: 'picture',
      title: 'Picture',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'bio',
      title: 'Bio',
      type: 'text',
    },
    {
      name: 'skills',
      title: 'Skills',
      type: 'array',
      of: [{type: 'string'}],
    },
    {
      name: 'github',
      title: 'GitHub',
      type: 'string',
    },
    {
      name: 'linkedIn',
      title: 'Linkedin',
      type: 'string',
    },
    {
      name: 'twitter',
      title: 'Twitter',
      type: 'string',
    },
    {
      name: 'portfolio',
      title: 'Portfolio',
      type: 'string',
    },
  ],
}
