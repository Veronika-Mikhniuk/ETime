import LanguageIcon from '@mui/icons-material/Language'
import { StyledHeaderIcon } from '@/components/styled/icons'

export function LangToggle() {
    const toggleLang = (): void => {
        console.log('Lang toggled')
    }

    return (
        <button
            className="lang-toggle"
            onClick={toggleLang}
            type="button"
            style={{ backgroundColor: 'transparent', border: 'none' }}
        >
            <LanguageIcon component={StyledHeaderIcon} />
        </button>
    )
}