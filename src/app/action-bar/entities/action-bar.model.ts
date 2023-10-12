interface optionsInterface {
  disable?: boolean,
  submenu?: submenuInterface[] | null
}
interface submenuInterface {
  label: string,
  fn: () => void;
  disable?: boolean
}

export class Botao {
  label: string;
  disable: boolean;
  submenu: submenuInterface[] | null;
  fn: () => void;

  constructor(
    label: string,
    options: optionsInterface = {},
    fn: () => void = () => {}
  ) {
      this.label = label;
      this.fn = fn;
      this.disable = (options.disable !== null &&  options.disable !== undefined) ? options.disable : true;
      this.submenu = options.submenu || null;

      if (this.submenu) {
        this.submenu.forEach(it => {
          it.disable = it.disable !== undefined ? it.disable : true;
        })
      }
    }
}
