import { CollectionConfig } from 'payload/types';

const Houses: CollectionConfig = {
  slug: 'houses',
  admin: {
    useAsTitle: 'houseName',
  },
  access: {
    read: () => true,
  },
  fields: [
    // Email added by default
    // Add more fields as needed
    {
      name: 'houseName',
      type: 'text',
    }, {name: 'houseDescription', type: 'text'}
  ],
};

export default Houses;
