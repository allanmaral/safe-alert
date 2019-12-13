import totalvoice from 'totalvoice-node';

import TotalVoiceSettings from '../config/TotalVoice';

const client = new totalvoice(TotalVoiceSettings.accessToken);

export default client;
