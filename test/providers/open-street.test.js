import {OpenStreet} from '../../src/providers/open-street.js'

it('geolookup', done => {
  let osm = new OpenStreet();
  return osm.geolookup('brampton on').then(result => {
    expect(result.length).toBeGreaterThan(0);
    expect(result[0].source).toBe('OpenStreetMap');
    expect(result[0].lat).toBe(43.715783);
    expect(result[0].lng).toBe(-79.752502);
    done();
  })
});

it('reverse', done => {
  let osm = new OpenStreet();
  return osm.reverse(43.7315479, -79.7624177).then(result => {
    expect(result.source).toBe('OpenStreetMap');
    expect(result.address).toMatch(/Brampton/);
    done();
  })
});