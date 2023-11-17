import { useEffect } from 'react';

const Faq = () => {
  useEffect(() => {
    // Cuando el componente se monta (cuando se navega a esta página), desplázate al inicio de la página.
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
        <div className="w-full h-screen faqDesktop">
          <div className='absolute inset-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center w-full'>
              <h1 className='text-center leading-10 text-4xl text-white tablet:text-5xl desktop:text-7xl'>Preguntas Frecuentes</h1>
          </div> 
        </div>

        <section className="w-[90%] max-w-screen-tablet mx-auto my-5 font-work">

          <p className='uppercase text-center text-xl text-bold my-10'>Reservas y Tarifas</p>
          
          <details
            className="group border-s-4 border-gray-900 bg-gray-50 p-6 [&_summary::-webkit-details-marker]:hidden my-4"
            
          >
            <summary className="flex cursor-pointer items-center justify-between gap-1.5">
              <h2 className="text-base font-medium text-gray-900">
              ¿Cómo puedo hacer una reserva en Be' Tania?
              </h2>

              <span className="shrink-0 rounded-full bg-white p-1.5 text-gray-900 sm:p-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 shrink-0 transition duration-300 group-open:-rotate-45"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
            </summary>

            <p className="mt-4 leading-relaxed text-gray-700 text-sm">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab hic veritatis
              molestias culpa in, recusandae laboriosam neque aliquid libero nesciunt
              voluptate dicta quo officiis explicabo consequuntur distinctio corporis
              earum similique!
            </p>
          </details>

          <details
            className="group border-s-4 border-gray-900 bg-gray-50 p-6 [&_summary::-webkit-details-marker]:hidden my-4"
            
          >
            <summary className="flex cursor-pointer items-center justify-between gap-1.5">
              <h2 className="text-base font-medium text-gray-900">
              ¿Cuáles son los métodos de pago aceptados?
              </h2>

              <span className="shrink-0 rounded-full bg-white p-1.5 text-gray-900 sm:p-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 shrink-0 transition duration-300 group-open:-rotate-45"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
            </summary>

            <p className="mt-4 leading-relaxed text-gray-700 text-sm">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab hic veritatis
              molestias culpa in, recusandae laboriosam neque aliquid libero nesciunt
              voluptate dicta quo officiis explicabo consequuntur distinctio corporis
              earum similique!
            </p>
          </details>

          <details
            className="group border-s-4 border-gray-900 bg-gray-50 p-6 [&_summary::-webkit-details-marker]:hidden my-4"
            
          >
            <summary className="flex cursor-pointer items-center justify-between gap-1.5">
              <h2 className="text-base font-medium text-gray-900">
              ¿Cuál es la política de cancelación?
              </h2>

              <span className="shrink-0 rounded-full bg-white p-1.5 text-gray-900 sm:p-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 shrink-0 transition duration-300 group-open:-rotate-45"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
            </summary>

            <p className="mt-4 leading-relaxed text-gray-700 text-sm">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab hic veritatis
              molestias culpa in, recusandae laboriosam neque aliquid libero nesciunt
              voluptate dicta quo officiis explicabo consequuntur distinctio corporis
              earum similique!
            </p>
          </details>
          
          <p className='uppercase text-center text-xl text-bold my-10'>Alojamiento</p>
          
          <details
            className="group border-s-4 border-gray-900 bg-gray-50 p-6 [&_summary::-webkit-details-marker]:hidden my-4"
          >
            <summary className="flex cursor-pointer items-center justify-between gap-1.5">
              <h2 className="text-base font-medium text-gray-900">
              ¿Cuáles son los tipos de habitaciones disponibles?
              </h2>

              <span className="shrink-0 rounded-full bg-white p-1.5 text-gray-900 sm:p-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 shrink-0 transition duration-300 group-open:-rotate-45"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
            </summary>

            <p className="mt-4 leading-relaxed text-gray-700 text-sm">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab hic veritatis
              molestias culpa in, recusandae laboriosam neque aliquid libero nesciunt
              voluptate dicta quo officiis explicabo consequuntur distinctio corporis
              earum similique!
            </p>
          </details>

          <details
            className="group border-s-4 border-gray-900 bg-gray-50 p-6 [&_summary::-webkit-details-marker]:hidden my-4"
          >
            <summary className="flex cursor-pointer items-center justify-between gap-1.5">
              <h2 className="text-base font-medium text-gray-900">
              ¿Cuál es la capacidad máxima de una habitación?
              </h2>

              <span className="shrink-0 rounded-full bg-white p-1.5 text-gray-900 sm:p-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 shrink-0 transition duration-300 group-open:-rotate-45"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
            </summary>

            <p className="mt-4 leading-relaxed text-gray-700 text-sm">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab hic veritatis
              molestias culpa in, recusandae laboriosam neque aliquid libero nesciunt
              voluptate dicta quo officiis explicabo consequuntur distinctio corporis
              earum similique!
            </p>
          </details>

          <details
            className="group border-s-4 border-gray-900 bg-gray-50 p-6 [&_summary::-webkit-details-marker]:hidden my-4"
          >
            <summary className="flex cursor-pointer items-center justify-between gap-1.5">
              <h2 className="text-base font-medium text-gray-900">
              ¿Puedo solicitar una cama extra o una cuna?
              </h2>

              <span className="shrink-0 rounded-full bg-white p-1.5 text-gray-900 sm:p-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 shrink-0 transition duration-300 group-open:-rotate-45"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
            </summary>

            <p className="mt-4 leading-relaxed text-gray-700 text-sm">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab hic veritatis
              molestias culpa in, recusandae laboriosam neque aliquid libero nesciunt
              voluptate dicta quo officiis explicabo consequuntur distinctio corporis
              earum similique!
            </p>
          </details>

          <details
            className="group border-s-4 border-gray-900 bg-gray-50 p-6 [&_summary::-webkit-details-marker]:hidden my-4"
          >
            <summary className="flex cursor-pointer items-center justify-between gap-1.5">
              <h2 className="text-base font-medium text-gray-900">
              ¿Tienen habitaciones para personas con movilidad reducida?
              </h2>

              <span className="shrink-0 rounded-full bg-white p-1.5 text-gray-900 sm:p-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 shrink-0 transition duration-300 group-open:-rotate-45"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
            </summary>

            <p className="mt-4 leading-relaxed text-gray-700 text-sm">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab hic veritatis
              molestias culpa in, recusandae laboriosam neque aliquid libero nesciunt
              voluptate dicta quo officiis explicabo consequuntur distinctio corporis
              earum similique!
            </p>
          </details>

          <p className='uppercase text-center text-xl text-bold my-10'>Servicios y Comodidades</p>
          
          <details
            className="group border-s-4 border-gray-900 bg-gray-50 p-6 [&_summary::-webkit-details-marker]:hidden my-4"
          >
            <summary className="flex cursor-pointer items-center justify-between gap-1.5">
              <h2 className="text-base font-medium text-gray-900">
              ¿Qué servicios e instalaciones ofrece el hotel?
              </h2>

              <span className="shrink-0 rounded-full bg-white p-1.5 text-gray-900 sm:p-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 shrink-0 transition duration-300 group-open:-rotate-45"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
            </summary>

            <p className="mt-4 leading-relaxed text-gray-700 text-sm">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab hic veritatis
              molestias culpa in, recusandae laboriosam neque aliquid libero nesciunt
              voluptate dicta quo officiis explicabo consequuntur distinctio corporis
              earum similique!
            </p>
          </details>

          <details
            className="group border-s-4 border-gray-900 bg-gray-50 p-6 [&_summary::-webkit-details-marker]:hidden my-4"
          >
            <summary className="flex cursor-pointer items-center justify-between gap-1.5">
              <h2 className="text-base font-medium text-gray-900">
              ¿Se admiten mascotas en el hotel?
              </h2>

              <span className="shrink-0 rounded-full bg-white p-1.5 text-gray-900 sm:p-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 shrink-0 transition duration-300 group-open:-rotate-45"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
            </summary>

            <p className="mt-4 leading-relaxed text-gray-700 text-sm">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab hic veritatis
              molestias culpa in, recusandae laboriosam neque aliquid libero nesciunt
              voluptate dicta quo officiis explicabo consequuntur distinctio corporis
              earum similique!
            </p>
          </details>


          <p className='uppercase text-center text-xl text-bold my-10'>Check-in y Check-out</p>
          
          <details
            className="group border-s-4 border-gray-900 bg-gray-50 p-6 [&_summary::-webkit-details-marker]:hidden my-4"
          >
            <summary className="flex cursor-pointer items-center justify-between gap-1.5">
              <h2 className="text-base font-medium text-gray-900">
              ¿A qué hora puedo hacer el check-in?
              </h2>

              <span className="shrink-0 rounded-full bg-white p-1.5 text-gray-900 sm:p-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 shrink-0 transition duration-300 group-open:-rotate-45"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
            </summary>

            <p className="mt-4 leading-relaxed text-gray-700 text-sm">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab hic veritatis
              molestias culpa in, recusandae laboriosam neque aliquid libero nesciunt
              voluptate dicta quo officiis explicabo consequuntur distinctio corporis
              earum similique!
            </p>
          </details>

          <details
            className="group border-s-4 border-gray-900 bg-gray-50 p-6 [&_summary::-webkit-details-marker]:hidden my-4"
          >
            <summary className="flex cursor-pointer items-center justify-between gap-1.5">
              <h2 className="text-base font-medium text-gray-900">
              ¿Puedo hacer el check-in temprano o el check-out tardío?
              </h2>

              <span className="shrink-0 rounded-full bg-white p-1.5 text-gray-900 sm:p-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 shrink-0 transition duration-300 group-open:-rotate-45"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
            </summary>

            <p className="mt-4 leading-relaxed text-gray-700 text-sm">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab hic veritatis
              molestias culpa in, recusandae laboriosam neque aliquid libero nesciunt
              voluptate dicta quo officiis explicabo consequuntur distinctio corporis
              earum similique!
            </p>
          </details>

          <details
            className="group border-s-4 border-gray-900 bg-gray-50 p-6 [&_summary::-webkit-details-marker]:hidden my-4"
          >
            <summary className="flex cursor-pointer items-center justify-between gap-1.5">
              <h2 className="text-base font-medium text-gray-900">
              ¿Cuál es el proceso de check-in y check-out?
              </h2>

              <span className="shrink-0 rounded-full bg-white p-1.5 text-gray-900 sm:p-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 shrink-0 transition duration-300 group-open:-rotate-45"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
            </summary>

            <p className="mt-4 leading-relaxed text-gray-700 text-sm">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab hic veritatis
              molestias culpa in, recusandae laboriosam neque aliquid libero nesciunt
              voluptate dicta quo officiis explicabo consequuntur distinctio corporis
              earum similique!
            </p>
          </details>


          <p className='uppercase text-center text-xl text-bold my-10'>Políticas del Hospedaje</p>
          
          <details
            className="group border-s-4 border-gray-900 bg-gray-50 p-6 [&_summary::-webkit-details-marker]:hidden my-4"
          >
            <summary className="flex cursor-pointer items-center justify-between gap-1.5">
              <h2 className="text-base font-medium text-gray-900">
              ¿Cuál es la política de no fumar?
              </h2>

              <span className="shrink-0 rounded-full bg-white p-1.5 text-gray-900 sm:p-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 shrink-0 transition duration-300 group-open:-rotate-45"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
            </summary>

            <p className="mt-4 leading-relaxed text-gray-700 text-sm">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab hic veritatis
              molestias culpa in, recusandae laboriosam neque aliquid libero nesciunt
              voluptate dicta quo officiis explicabo consequuntur distinctio corporis
              earum similique!
            </p>
          </details>

          <details
            className="group border-s-4 border-gray-900 bg-gray-50 p-6 [&_summary::-webkit-details-marker]:hidden my-4"
          >
            <summary className="flex cursor-pointer items-center justify-between gap-1.5">
              <h2 className="text-base font-medium text-gray-900">
              ¿Se requiere una tarjeta de crédito al hacer el check-in?
              </h2>

              <span className="shrink-0 rounded-full bg-white p-1.5 text-gray-900 sm:p-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 shrink-0 transition duration-300 group-open:-rotate-45"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
            </summary>

            <p className="mt-4 leading-relaxed text-gray-700 text-sm">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab hic veritatis
              molestias culpa in, recusandae laboriosam neque aliquid libero nesciunt
              voluptate dicta quo officiis explicabo consequuntur distinctio corporis
              earum similique!
            </p>
          </details>
          
          <details
            className="group border-s-4 border-gray-900 bg-gray-50 p-6 [&_summary::-webkit-details-marker]:hidden my-4"
          >
            <summary className="flex cursor-pointer items-center justify-between gap-1.5">
              <h2 className="text-base font-medium text-gray-900">
              ¿Cuál es la política de seguridad del hotel?
              </h2>

              <span className="shrink-0 rounded-full bg-white p-1.5 text-gray-900 sm:p-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 shrink-0 transition duration-300 group-open:-rotate-45"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
            </summary>

            <p className="mt-4 leading-relaxed text-gray-700 text-sm">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab hic veritatis
              molestias culpa in, recusandae laboriosam neque aliquid libero nesciunt
              voluptate dicta quo officiis explicabo consequuntur distinctio corporis
              earum similique!
            </p>
          </details>

          <details
            className="group border-s-4 border-gray-900 bg-gray-50 p-6 [&_summary::-webkit-details-marker]:hidden my-4"
          >
            <summary className="flex cursor-pointer items-center justify-between gap-1.5">
              <h2 className="text-base font-medium text-gray-900">
              ¿Hay restricciones de edad para registrarse?
              </h2>

              <span className="shrink-0 rounded-full bg-white p-1.5 text-gray-900 sm:p-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 shrink-0 transition duration-300 group-open:-rotate-45"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
            </summary>

            <p className="mt-4 leading-relaxed text-gray-700 text-sm">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab hic veritatis
              molestias culpa in, recusandae laboriosam neque aliquid libero nesciunt
              voluptate dicta quo officiis explicabo consequuntur distinctio corporis
              earum similique!
            </p>
          </details>

          <p className='uppercase text-center text-xl text-bold my-10'>Actividades y Entretenimiento</p>
          
          <details
            className="group border-s-4 border-gray-900 bg-gray-50 p-6 [&_summary::-webkit-details-marker]:hidden my-4"
          >
            <summary className="flex cursor-pointer items-center justify-between gap-1.5">
              <h2 className="text-base font-medium text-gray-900">
              ¿Qué actividades o atracciones turísticas están cerca del hotel?
              </h2>

              <span className="shrink-0 rounded-full bg-white p-1.5 text-gray-900 sm:p-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 shrink-0 transition duration-300 group-open:-rotate-45"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
            </summary>

            <p className="mt-4 leading-relaxed text-gray-700 text-sm">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab hic veritatis
              molestias culpa in, recusandae laboriosam neque aliquid libero nesciunt
              voluptate dicta quo officiis explicabo consequuntur distinctio corporis
              earum similique!
            </p>
          </details>

          <details
            className="group border-s-4 border-gray-900 bg-gray-50 p-6 [&_summary::-webkit-details-marker]:hidden my-4"
          >
            <summary className="flex cursor-pointer items-center justify-between gap-1.5">
              <h2 className="text-base font-medium text-gray-900">
              ¿Ofrecen excursiones o tours organizados?
              </h2>

              <span className="shrink-0 rounded-full bg-white p-1.5 text-gray-900 sm:p-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 shrink-0 transition duration-300 group-open:-rotate-45"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
            </summary>

            <p className="mt-4 leading-relaxed text-gray-700 text-sm">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab hic veritatis
              molestias culpa in, recusandae laboriosam neque aliquid libero nesciunt
              voluptate dicta quo officiis explicabo consequuntur distinctio corporis
              earum similique!
            </p>
          </details>

          
          <p className='uppercase text-center text-xl text-bold my-10'>Política de Mascotas</p>
          
          <details
            className="group border-s-4 border-gray-900 bg-gray-50 p-6 [&_summary::-webkit-details-marker]:hidden my-4"
          >
            <summary className="flex cursor-pointer items-center justify-between gap-1.5">
              <h2 className="text-base font-medium text-gray-900">
              ¿Cuáles son las reglas para llevar mascotas al hotel?
              </h2>

              <span className="shrink-0 rounded-full bg-white p-1.5 text-gray-900 sm:p-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 shrink-0 transition duration-300 group-open:-rotate-45"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
            </summary>

            <p className="mt-4 leading-relaxed text-gray-700 text-sm">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab hic veritatis
              molestias culpa in, recusandae laboriosam neque aliquid libero nesciunt
              voluptate dicta quo officiis explicabo consequuntur distinctio corporis
              earum similique!
            </p>
          </details>

          <details
            className="group border-s-4 border-gray-900 bg-gray-50 p-6 [&_summary::-webkit-details-marker]:hidden my-4"
          >
            <summary className="flex cursor-pointer items-center justify-between gap-1.5">
              <h2 className="text-base font-medium text-gray-900">
              ¿Cuáles son los cargos adicionales por tener una mascota?
              </h2>

              <span className="shrink-0 rounded-full bg-white p-1.5 text-gray-900 sm:p-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 shrink-0 transition duration-300 group-open:-rotate-45"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
            </summary>

            <p className="mt-4 leading-relaxed text-gray-700 text-sm">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab hic veritatis
              molestias culpa in, recusandae laboriosam neque aliquid libero nesciunt
              voluptate dicta quo officiis explicabo consequuntur distinctio corporis
              earum similique!
            </p>
          </details>

          <p className='uppercase text-center text-xl text-bold my-10'>Contacto y Soporte</p>
          
          <details
            className="group border-s-4 border-gray-900 bg-gray-50 p-6 [&_summary::-webkit-details-marker]:hidden my-4"
          >
            <summary className="flex cursor-pointer items-center justify-between gap-1.5">
              <h2 className="text-base font-medium text-gray-900">
              ¿Cuál es el número de teléfono de contacto del hotel?
              </h2>

              <span className="shrink-0 rounded-full bg-white p-1.5 text-gray-900 sm:p-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 shrink-0 transition duration-300 group-open:-rotate-45"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
            </summary>

            <p className="mt-4 leading-relaxed text-gray-700 text-sm">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab hic veritatis
              molestias culpa in, recusandae laboriosam neque aliquid libero nesciunt
              voluptate dicta quo officiis explicabo consequuntur distinctio corporis
              earum similique!
            </p>
          </details>

          <details
            className="group border-s-4 border-gray-900 bg-gray-50 p-6 [&_summary::-webkit-details-marker]:hidden my-4"
          >
            <summary className="flex cursor-pointer items-center justify-between gap-1.5">
              <h2 className="text-base font-medium text-gray-900">
              ¿Cómo puedo hacer una solicitud especial o dejar comentarios?
              </h2>

              <span className="shrink-0 rounded-full bg-white p-1.5 text-gray-900 sm:p-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 shrink-0 transition duration-300 group-open:-rotate-45"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
            </summary>

            <p className="mt-4 leading-relaxed text-gray-700 text-sm">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab hic veritatis
              molestias culpa in, recusandae laboriosam neque aliquid libero nesciunt
              voluptate dicta quo officiis explicabo consequuntur distinctio corporis
              earum similique!
            </p>
          </details>

        </section>
    </>
  )
}

export default Faq