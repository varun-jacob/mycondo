/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
 module.exports = [
  {
    id: 1,
    condo_id: 1,
    unit: '1',
    name: 'Condo1 Name1',
    phone: 'Condo1 Phone1',
    email: 'condo1name1@email.com',
    password: 'condo1name1password',    
  },
  {
    id: 2,
    condo_id: 1,
    unit: '2',
    name: 'Condo1 Name2',
    phone: 'Condo1 Phone2',
    email: 'condo1name2@email.com',
    password: 'condo1name2password',    
  },
  {
    id: 3,
    condo_id: 2,
    unit: '1',
    name: 'Condo2 Name1',
    phone: 'Condo2 Phone1',
    email: 'condo2name1@email.com',
    password: 'condo2name1password',    
  },
  {
    id: 4,
    condo_id: 2,
    unit: '2',
    name: 'Condo2 Name2',
    phone: 'Condo2 Phone2',
    email: 'condo2name2@email.com',
    password: 'condo2name2password',    
  },
];