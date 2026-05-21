import Image from "next/image"
import Link from "next/link"

export default function Header() {
  return (
    <header className="bg-dark py-0 px-4 flex justify-between items-center gap-2">
      {/* Lado esquerdo: logo folha */}
      <div className="flex items-center justify-start flex-shrink-0">
        <div className="relative w-28 h-28 sm:w-38 sm:h-28 md:w-28 md:h-320">
          <Image src="/logo.png" alt="Green Leaf Logo" fill className="object-contain" />
        </div>
      </div>
      {/* Centro: logo AXIS */}
      <div className="flex-1 flex justify-center">
        <div className="relative w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16">
          <Image src="https://thelimaleo.github.io/Prototipo_site_PI/assets/logos/AXIS.svg" alt="AXIS Logo" fill className="object-contain" />
        </div>
      </div>
      {/* Navegação: lado direito */}
      <nav className="flex items-center justify-end">
        <ul className="flex flex-wrap justify-end gap-x-4 gap-y-2 text-sm">
          <li>
            <Link href="/" className="text-primary hover:underline">
              Início
            </Link>
          </li>
          <li>
            <Link href="/sobre" className="text-primary hover:underline">
              Equipe
            </Link>
          </li>
          <li>
            <Link href="/cadastro" className="text-primary hover:underline">
              Cadastro
            </Link>
          </li>
          <li>
            <Link href="/login" className="text-primary hover:underline">
              Login
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}
