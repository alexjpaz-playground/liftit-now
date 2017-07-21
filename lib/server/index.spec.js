const server = require('./');
const request = require('superagent');

describe('server', () => {
  let port = null;
  let app = null;

  beforeEach((done) => {
    var net = require('net');
    var srv = net.createServer();
    srv.listen(0, function() {
      port = srv.address().port;
      srv.close();
      app = server.listen(port, done);
      done();
    });
  });

  afterEach(() => {
    app.close();
  });

  it('should start', (done) => {
    request.get(`http://localhost:${port}`)
      .then((rsp) => {
        expect(rsp.text).toBe("Hello World!");
        done();
      })
      .catch(done.fail);
  });
});
