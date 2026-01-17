import { Icon } from "@iconify/react";
import Logo from "./Logo";
import MobileNavMenu from "./MobileNavMenu";



export default function MobileHeaderSection(){
    return (
        <header className="pt-6 px-4 bg-white md:px-8 flex lg:hidden border-b justify-center items-center">
            <div className="flex items-center justify-between flex-wrap w-full lg:hidden pb-8">
                <Logo width={90} height={90} />

                <MobileNavMenu />
                <button
                    aria-label="Toggle menu"
                >
                    <Icon
                        icon="lineicons:menu-hamburger-1"
                        width="30"
                        height="30"
                        className="size-8"
                    />
                </button>
            </div>
        </header>
    )
}