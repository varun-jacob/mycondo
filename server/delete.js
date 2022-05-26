// .select(['amenities.name', 'bookings.start_time'])
// .from('bookings')
// .innerJoin('amenities', 'bookings.amenity_id', 'amenities.id')
// .where({'bookings.id': req.params.id })