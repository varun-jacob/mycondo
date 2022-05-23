/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
 module.exports = [
  {
    id: 1,
    condo_id: 1,
    name: 'Pool',
    image_url: 'https://torontolife.com/wp-content/uploads/2019/09/WEBGC_Rise_Condo_Pool-7788-2000x1333.jpg',
    max_bookings: 1,
    start_time: '07:00',
    end_time: '22:00',
  },
  {
    id: 2,
    condo_id: 1,
    name: 'Tennis Court',
    image_url: 'https://upload.wikimedia.org/wikipedia/commons/c/c4/Universityofbath_indoor_tennis_courts_arp.jpg',
    max_bookings: 1,
    start_time: '07:00',
    end_time: '22:00',  
  },  {
    id: 3,
    condo_id: 2,
    name: 'Pool',
    image_url: 'https://upload.wikimedia.org/wikipedia/commons/9/92/Backyardpool.jpg',
    max_bookings: 1,
    start_time: '06:00',
    end_time: '20:00',
  },
  {
    id: 4,
    condo_id: 2,
    name: 'Tennis Court',
    image_url: 'https://www.perfect-tennis.com/wp-content/uploads/2019/02/tennis-court-dimensions.jpg',
    max_bookings: 1,
    start_time: '06:00',
    end_time: '20:00',  
  },
];
