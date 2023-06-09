import { CollectionConfig } from 'payload/types';

const Cases: CollectionConfig = {
  slug: 'cases',
  admin: {
    useAsTitle: 'caseName',
  },
  access: {
    read: () => true,
  },
  fields: [
    // Email added by default
    // Add more fields as needed
    {
      name: 'caseName',
      type: 'text',
    },
    {name: 'caseDescription', type: 'text'},
    {
      name: 'parentHouse',
      type: 'relationship',
      relationTo: ['houses'],
      required: true,
      hasMany: false
    }
  ],
};

export default Cases;
