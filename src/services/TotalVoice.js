import totalvoice from 'totalvoice-node';

import TotalVoiceSettings from '../config/TotalVoice';

const client = new totalvoice(TotalVoiceSettings.accessToken);

export default {
  sms: {
    enviar: async message => {
      client.sms.enviar(TotalVoiceSettings.phone, message, false, false);
    },
  },
  tts: {
    enviar: async message => {
      client.tts.enviar(TotalVoiceSettings.phone, message, {
        velocidade: -1,
        tipo_voz: 'br-Vitoria',
        detecta_caixa: true,
      });
    },
  },
};
