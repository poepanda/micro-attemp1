import get from 'lodash/get';
import isEmpty from 'lodash/isEmpty';

export default function (req, res, additionalHeaders = {}) {
  const jwtToken = get(req, 'user.accessToken');
  const jwtHeaders = isEmpty(jwtToken) ? {} : {'Authorization': `JWT ${jwtToken}`};

  return {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'X-Shopback-Country': res.locals.domain.COUNTRY,
    'X-Shopback-Domain': res.locals.domain.DOMAIN,
    'X-Shopback-Language': res.locals.domain.LANGUAGE,
    'X-Shopback-Agent': 'sbconsumeragent/1.0',
    'X-Shopback-Internal': '682a46b19b953306c9ee2e8deb0dc210',
    ...additionalHeaders,
    ...jwtHeaders,
  };
}
