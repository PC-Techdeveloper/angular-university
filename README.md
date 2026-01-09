# Crear Componentes Inline en Angular

Para crear un componente en Angular CLI, utilizando plantillas, estilos en línea (inline) y escapando la generación de pruebas, utiliza el siguiente parámetro:

- `ng g c component-inline --inline-template --inline-style --skip-test`

# Instalación de Bootstrap en Angular (Página Oficial de Bootstrap)

Para instalar Bootstrap en Angular, utiliza el siguiente comando:

- `npm install bootstrap@5.3.8 --save`

Añadir en el index.html los siguientes cdn de Bootstrap:

```html
<link
  href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.min.css"
  rel="stylesheet"
  integrity="sha384-sRIl4kxILFvY47J16cr9ZwB07vP4J8+LH7qKQnuqkuIAvNWLzeN8tE5YBujZqJLB"
  crossorigin="anonymous"
/>
<script
  src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/js/bootstrap.bundle.min.js"
  integrity="sha384-FKyoEForCGlyvwx9Hj09JcYn3nv7wiPVlz7YYwJrWVcXK/BmnVDxM+D2scQbITxI"
  crossorigin="anonymous"
></script>
```

Y por último instalar la extensión de Bootstrap oficial si usas VsCode _Bootstrap Intellisense_.

# Concepto de interpolación en Angular

La interpolación en Angular es una técnica que permite enlazar datos del componente a la vista (plantilla HTML) de manera dinámica. Utilizando la interpolación se puede mostrar datos de propiedades del componente dentro del a plantilla de manera directa. La interpolación se realiza mediante la sintaxis {{...}}, donde se coloca una expresión de Angular dentro de las llaves dobles.

## Uso de varios componentes en Angular

Para utilizar varios componentes en Angular, se crea un componente padre donde incluye varias veces el compnente hijo para que se pueda relacionar el componente hijo con el componente padre.

# Encapsulamiento de propiedades en TypeScript y Angular

En TypeScript y JavaScript, hay una diferencia significativa entre un método que usa la palabra clave `get` para definir un acccesor (`getter`) y un método regular que actúa como parte del encapsulamiento.

## Método get (accessor)

- En typescript permite definir métodos con la palabra clave get, lo que crea un getter.
- Estos métodos se acceden como si fueran propiedades en lugar de métodos. No necesitan parentesis cuando se usan en una plantilla o al llamarse código.
- Los getters son útiles para encapsular lógica de acceso sin que el llamador sepa que está llamando a una función.

## Método de encapsulamiento

- No usa espacio después de la palabra clave `get` o `set`.
- Para acceder a este método en la plantilla, se necesita usar la sintaxis `()` para llamar a la función.
- Es útil para operaciones que necesitan recibir parámetros o realizar cálculos o acciones más complejas.

# Event Binding en Angular

Es una técnica que permite enlazar eventos del DOM (Document Object Model) con métodos del componente de Angular. Esto permite que angular ejecute código en respuesta a la interacción del usuario con el componente, como hacer clic en un botón, mover el mouse, escribir en un campo de texto, etc.

# Property Binding

Permite enlazar valores de propiedades del componente a propiedades de elementos HTML. Esto se logra utilizando la sintaxis {{}}. que enlaza la propiedad de un elemento o componente a una expresión de Angular, permitiendo que los cambios en el valor de la propiedad en el componente se refleje automáticamente en el elemento HTML.

# Two way data binding Angular

Permite que los datos entre el componente y la vista estén sincronizados automáticamente. Esto significa que, si el valor de la vista cambia, el valor en el componente también se actualiza y viceversa.

Importar FormsModule: Es una configuraci+on para poder usar ngModel en componentes Angular.

# Directiva en Angular

## @if

- Es una forma de manejar el flujo condicional en las plantillas de Angular. Permite mostrar u ocultar partes de la intefaz de usuario dependiendo de si una condición es verdadera o falsa.

## @for

- Permite iterar sobre colecciones directamente desde la plantilla de HTML. Esta sintaxis es limpia y expresiva, integrándose muy bien con los bloques de control de flujo como @if y @else. La directiva @for permite generar dinámicamente contenido en la plantilla según los elementos de una colección.

# Local reference

Es una referencia que se crea directamente en la plantilla de HTML y permite acceder a un elemento del DOM como un `input, button, etc` dentro de la misma plantilla. Esto es útil para interactuar con elementos del DOM sin necesidad de manipularlos directamente desde el codigo de TypeScript del componente.

# Comunicación entre componentes en Angular (Compartir datos)

## Decorador @input
Un decorador en Angular es una función especial que se utiliza para añadir metodos a clases, métodos, propiedades o parámetros. Estos metadatos son esenciales para que angular pueda entender como debe manejar y comportarse un elemento especifico en la aplicación.

El decorador @input permite que un componente hijo reciba datos desde su componente padre.

