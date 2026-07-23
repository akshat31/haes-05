import en from '../../locales/en.json'
import fr from '../../locales/fr.json'
import de from '../../locales/de.json'
import es from '../../locales/es.json'
import it from '../../locales/it.json'
import nl from '../../locales/nl.json'
import pt from '../../locales/pt.json'
import sv from '../../locales/sv.json'
import pl from '../../locales/pl.json'
import da from '../../locales/da.json'
import { useParams } from 'react-router-dom'

const map = { en, fr, de, es, it, nl, pt, sv, pl, da }

export default function useTranslations(){
  const { locale } = useParams()
  const lang = locale || 'en'
  const t = (key) => {
    const parts = key.split('.')
    const obj = map[lang] || map['en']
    let cur = obj
    for (const p of parts) {
      if (!cur) return key
      cur = cur[p]
    }
    return cur ?? key
  }
  return { t, locale: lang }
}
