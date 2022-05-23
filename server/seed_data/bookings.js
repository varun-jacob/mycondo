/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
 module.exports = [
  {
    id: 1,
    condo_id: 1,
    resident_id: 1,
    amenity_id: 1,
    date: '2022-06-01',
    start_time: '07:00',
    end_time: '07:30',
  },
  {
    id: 2,
    condo_id: 1,
    resident_id: 1,
    amenity_id: 2,
    date: '2022-06-02',
    start_time: '08:00',
    end_time: '08:30',
  },
  {
    id: 3,
    condo_id: 2,
    resident_id: 2,
    amenity_id: 2,
    date: '2022-06-03',
    start_time: '09:00',
    end_time: '09:30',
  },
  {
    id: 4,
    condo_id: 2,
    resident_id: 1,
    amenity_id: 2,
    date: '2022-06-04',
    start_time: '09:00',
    end_time: '09:30',
  },
];