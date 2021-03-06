const Pusher = require("pusher");

var pusher = new Pusher({
  appId: "707694",
  key: "3f43dc4d450902026e31",
  secret: "34f60b0ed788e14f60d3",
  cluster: "eu",
  encrypted: true
});

exports.handler = function(event, context, callback) {
  const { method, params } = JSON.parse(event.body);
  const [channelId] = params;

  pusher.trigger(`RCID-${channelId}`, method, {});

  callback(null, {
    statusCode: 200,
    body: ""
  });
};
