import Link from 'next/link'
import { FaDiscord, FaFacebook, FaGithub } from 'react-icons/fa';
import KofiWidget from '@/components/widget/kofi';

const Footer = () => {
    return (
        <footer className='border-t border-border'>
            <div className="w-full flex flex-col text-center gap-1 md:flex-row px-6 md:px-20 py-4 justify-between items-center">
                <div className="font-serif flex flex-col items-center md:items-start">
                    <span className='font-bold text-xl'>HOTOME SHIKI</span>
                    <span>Developer · Win Variation Simp</span>
                </div>
                {/*<KofiWidget />*/}
                <div className="flex flex-col text-lg text-muted text-center md:items-end items-center gap-1">
                    <div className='flex gap-3'>
                        <Link href={"https://discord.com/users/607086287467577344"} className='hover:text-text'><FaDiscord size={24} /></Link>
                        <Link href={"https://github.com/ShikiHTM"} className='hover:text-text'><FaGithub size={24} /></Link>
                        <Link href={"https://www.facebook.com/ShikiHTM/"} className='hover:text-text'><FaFacebook size={24} /></Link>
                    </div>
                    <div>
                        <span>Powered by </span>
                        <Link href={"https://vercel.com/"}
                            className='underline hover:text-text'
                        >Vercel</Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;
