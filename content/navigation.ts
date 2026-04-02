export type NavigationLink = {
  label: string;
  href: string;
};

export const navbarLinks: NavigationLink[] = [
  { label: "Inicio", href: "/#hero" },
  { label: "Excursiones", href: "/excursiones" },
  { label: "Diferenciales", href: "/#diferenciales" },
];

export const footerLinks: NavigationLink[] = [
  { label: "Inicio", href: "/" },
  { label: "Excursiones", href: "/excursiones" },
  { label: "Atractivos", href: "/excursiones?categoria=atraccion" },
  { label: "Traslados", href: "/excursiones?categoria=traslado" },
];
