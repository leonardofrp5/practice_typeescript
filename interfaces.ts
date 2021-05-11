// La interfaces se pueden extender para agregar mas valores
interface Employe {
  firstName: string; // requerida
  lastName?: string; // Opcional
  readonly age: number; // Solo de lectura en momento de compilacion y no es mutable.
  fullName(): string;
}

const employe: Employe = {
  firstName: 'leo',
  lastName: 'Romero;',
  age: 18,
  fullName() {
    return this.firstName + this.lastName;
  }
};

// A este no se le puede agrandar el tamañoo o agregar mas propiedades
type Frontend = {
  html: boolean;
  css: boolean;
};

type FrontendPlus = {
  js: boolean;
  reacr: boolean;
};

type FrontendSenio = Frontend | FrontendPlus;

// ejemplo con interfaces
function test(frontend: Frontend) {
  const { html, css } = frontend;
  if (html && css) {
    console.log('Es un dev Senior');
  } else {
    console.log('Es un dev Junior');
  }
}

const data = {
  html: true,
  css: false
};

test(data);

export interface Javascript {
  react: boolean;
  angular: boolean;
  experiences: number;
  name: string;
}
export interface DataPlus extends Javascript {
  lastName: string;
}

export const values: Javascript = {
  react: true,
  angular: false,
  experiences: 3,
  name: 'leo'
};

function inter(values: Javascript) {
  if (values.react) {
    console.log('saba react');
  }
}

inter(values);
