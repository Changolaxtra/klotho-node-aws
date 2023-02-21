import { v4 as uuidv4 } from 'uuid';
import { qrWifiRequest } from '../dto/requests';


/* @klotho::persist {
 *   id = "wifiData"
 * }
 */
const wifiDataMap = new Map();

export const save = (request: qrWifiRequest) => {
    const key = uuidv4();
    wifiDataMap.set(key, JSON.stringify(request));
}

exports.save = save;