import React from 'react';
import BottomNavbar from '../components/nav_bar_proyectos';

export const ProjectDetallesPage = () => {
    return (
        <div className="proyecto-detalles-page">
            <div className="proyecto-detalles-page__container">
                <h1 className="proyecto-detalles-page__title">Detalles del Proyecto</h1>
                
                <div className="proyecto-detalles-page__info-section">
                    <p className="proyecto-detalles-page__description">
                        Aquí encontrarás todos los detalles sobre el proyecto, incluyendo su propósito, las tecnologías utilizadas, el equipo detrás del proyecto, y mucho más.
                    </p>
                    
                    <h2 className="proyecto-detalles-page__subtitle">Propósito del Proyecto</h2>
                    <p className="proyecto-detalles-page__text">
                        El propósito de este proyecto es proporcionar a las empresas una solución integral de ciberseguridad para proteger sus datos críticos. Al fortalecer la defensa contra amenazas digitales, el proyecto ayuda a las empresas a operar de manera segura y confiable en el entorno digital.
                    </p>
                    
                    <h2 className="proyecto-detalles-page__subtitle">Tecnologías Utilizadas</h2>
                    <ul className="proyecto-detalles-page__list">
                        <li>React - para la construcción de la interfaz de usuario.</li>
                        <li>Node.js y Express - para el backend y la gestión de APIs.</li>
                        <li>MySQL - para el almacenamiento y gestión de datos.</li>
                        <li>Docker - para la contenedorización y despliegue de aplicaciones.</li>
                        <li>Herramientas de seguridad como OWASP ZAP y Nmap - para el análisis de vulnerabilidades.</li>
                    </ul>

                    <h2 className="proyecto-detalles-page__subtitle">Características Clave</h2>
                    <ul className="proyecto-detalles-page__list">
                        <li>Monitoreo en tiempo real de amenazas y vulnerabilidades.</li>
                        <li>Implementación de políticas de seguridad personalizadas.</li>
                        <li>Informes detallados y análisis de seguridad.</li>
                        <li>Integración con sistemas existentes de la empresa.</li>
                        <li>Soporte y mantenimiento continuo.</li>
                    </ul>

                    <h2 className="proyecto-detalles-page__subtitle">Beneficios para las Empresas</h2>
                    <p className="proyecto-detalles-page__text">
                        Al utilizar SecureNet Solutions, las empresas pueden:
                    </p>
                    <ul className="proyecto-detalles-page__list">
                        <li>Reducir el riesgo de ciberataques y brechas de seguridad.</li>
                        <li>Proteger la información confidencial y los datos críticos.</li>
                        <li>Mejorar la confianza de los clientes y socios comerciales.</li>
                        <li>Optimizar la eficiencia operativa mediante la automatización de tareas de seguridad.</li>
                        <li>Garantizar el cumplimiento de normativas y estándares de seguridad.</li>
                    </ul>
                </div>
            </div>
            
            <BottomNavbar
                problemUrl={"http://localhost:5050/proyecto"}
                socialUrl="http://localhost:5050/rrss"
                teamUrl="http://localhost:5050/equipo"
                detailsUrl="http://localhost:5050/detalles"
            />
        </div>
    );
};

export default ProjectDetallesPage;
