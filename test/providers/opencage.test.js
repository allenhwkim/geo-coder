import {OpenCage} from '../../src/providers/opencage.js'

var key = process.env.OPENCAGE_API_KEY;

if (key) {
  it('#geolookup', done => {
    let opencage = new OpenCage({key});
    return opencage.geolookup('brampton on').then(result => {
      expect(result.length).toBeGreaterThan(0);
      expect(result[0].source).toBe('OpenCage');
      expect(result[0].lat).toBeCloseTo(43.69);
      expect(result[0].lng).toBeCloseTo(-79.76);
      done();
    })
  });

  it('#reverse', done => {
    let opencage = new OpenCage({key});
    return opencage.reverse(43.7315479, -79.7624177).then(result => {
      expect(result.source).toBe('OpenCage');
      expect(result.address).toMatch(/Brampton/);
      done();
    })
  });
} else {
  it('Cannot run tests without OPENCAGE_API_KEY environment variable set');
}
