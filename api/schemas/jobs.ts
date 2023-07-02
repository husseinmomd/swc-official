// schemas/Jobs

export default {
  name: 'jobs',
  title: 'Jobs',
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
      name: 'jobTitle',
      title: 'Job Title',
      type: 'string',
    },
    {
      name: 'companyEmail',
      title: 'Company Email',
      type: 'string',
    },
    {
      name: 'location',
      title: 'Location',
      type: 'string',
    },
    {
      name: 'companyName',
      title: 'Company Name',
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
      name: 'workType',
      title: 'Work Type',
      type: 'string',
      options: {
        list: [
          {title: 'Office', value: 'Office'},
          {title: 'Hybird', value: 'Hybird'},
          {title: 'Remote', value: 'Remote'},
        ],
      },
    },
    {
      name: 'jobType',
      title: 'Job Type',
      type: 'string',
      options: {
        list: [
          {title: 'FullTime', value: 'FullTime'},
          {title: 'PartTime', value: 'PartTime'},
          {title: 'Contractor', value: 'Contractor'},
          {title: 'Intern', value: 'Intern'},
        ],
      },
    },
    {
      name: 'link',
      title: 'Link',
      type: 'string',
    },
    {
      name: 'estimatedSalary',
      title: 'Estimated Salary',
      type: 'number',
    },
  ],
}
