import styles from '../../styles/index.sass';
import { api, pdpHost } from '../../utils/platform';

var Text = function Text(key, label) {
  var type = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "checkout";
  var size = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : "medium";
  var slug = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : "";
  var styles = arguments[5];

  var host = pdpHost(api);
  var btn_url = function btn_url(s) {
    return 'https://s3-us-west-2.amazonaws.com/creditkey-assets/sdk/ck-btn-' + s + '.svg';
  };

  switch (type) {
    case "checkout":
      return '<span class="creditkey">\n          <img src="' + btn_url(size) + '" class="payment-icon" />\n          ' + (size == 'small' ? label.replace('Approval in seconds.', '') : label) + '\n          <a href="' + slug + '" class="action action-help terms" target="_new">See Terms</a>\n        </span>';
      break;

    case "pdp":
      return '<span class="creditkey"><a href="' + host + '/apply/start/' + key + '" target="_new" class="is-fullwidth" style="' + styles + '">\n          <span class="pdp-text">' + label + ' with </span><img src="' + btn_url(size) + '" class="payment-icon">\n        </a>\n      </span>';
      break;

    default:
      return '<span class="creditkey"><img src="' + btn_url(size) + '">\n          ' + label + '\n          <a href="' + terms_url + '" class="action action-help terms" target="_new">See Terms</a>\n        </span>';
  }
};

export default Text;