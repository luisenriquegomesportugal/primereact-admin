import AppLogo from '../layout/AppLogo';

const NotFoundPage = () => {
    return (
        <div className="flex flex-column align-items-center justify-content-center">
            <AppLogo icone className="mb-5 w-3rem flex-shrink-0" />
            <div style={{ borderRadius: '56px', padding: '0.3rem', background: 'linear-gradient(180deg, rgba(33, 150, 243, 0.4) 10%, rgba(33, 150, 243, 0) 30%)' }}>
                <div className="w-full surface-card py-8 px-5 sm:px-8 flex flex-column align-items-center" style={{ borderRadius: '53px' }}>
                    <span className="text-blue-500 font-bold text-3xl">404</span>
                    <h1 className="text-900 font-bold text-5xl mb-2">Página não encontrada</h1>
                    <div className="text-600 mb-5">O recurso solicitado não está disponível</div>
                </div>
            </div>
        </div>
    );
};

export default NotFoundPage;
