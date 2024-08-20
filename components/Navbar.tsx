import { ModeToggle } from "@/components/Dropdown";

export default async function Navbar() {
  return (
    <header className="py-4">
      <nav className="px-5">
        <ul className="flex justify-end">
          <li>
            <ModeToggle />
          </li>
        </ul>
      </nav>
    </header>
  );
}
