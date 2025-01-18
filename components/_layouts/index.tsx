import { PageMarginI } from '@/definitions/interfaces/general'

export const PageMarginWrapper: React.FC<PageMarginI> = ({ children }) => {
    return (
        <section>
            {children}
        </section>
    )
}