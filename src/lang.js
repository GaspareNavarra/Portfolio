import messageIt from '../public/static/language/italian.js';
import messageEn from '../public/static/language/english.js';

import { createI18n } from 'vue-i18n';

const i18n = createI18n({
    locale: 'en',
    fallbackLocale: 'en',
    messages:{
        it: messageIt,
        en: messageEn,
    }
});
export default i18n;