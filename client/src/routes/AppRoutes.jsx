import { Container } from "react-bootstrap";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CrearForm } from "../pages/admin/crearFormulario/CrearForm";
import { CrearProfessional } from "../pages/admin/crearProfesional/CrearProfessional";
// import { CrearTela } from "../pages/admin/crearTela/CrearTela"
import { InicioAdmin } from "../pages/admin/inicioAdmin/InicioAdmin";
import { Login } from "../pages/auth/login/Login";
import { Register } from "../pages/auth/register/Register";
import { RegisterProfessional } from "../pages/auth/registerProfessional/RegisterProfessional";
import { ReviewEmail } from "../pages/auth/reviewemail/ReviewEmail";
import { FotoRealizada } from "../pages/fotorealizada/FotoRealizada";
import { CameraVisor } from "../pages/fotos/CameraVisor";
import { GlowUp } from "../pages/glowup/GlowUp";
import { VistaUserProfesional } from "../pages/user/VistaUserProfesional/VistaUserProfesional";
import { HomeUser } from "../pages/user/homeUser/HomeUser";
import { FotosDetalles } from "../pages/vistafotos/FotosDetalles";
import { ModalConfirmacion } from "../pages/modales/modalconfirmacion/ModalConfirmacion";
import { ProcesoColorimetria } from "../pages/modales/modalcolorimetria/ProcesoColorimetria";
import { RepetirProceso } from "../pages/modales/repetirproceso/RepetirProceso";
import { Contraste } from "../pages/telas/contraste/Contraste";
import { ContrastePersonal } from "../pages/telas/contrastepersonal/ContrastePersonal";
import { AllTests1 } from "../pages/admin/crearFormulario/AllTests1";
import { CreateQuestionTest } from "../pages/admin/crearFormulario/CreateQuestionTest";
import { CreateQuestionOptionTest } from "../pages/admin/crearFormulario/CreateQuestionOptionTest";
import { CreatePhotoQuestionTest } from "../pages/admin/crearFormulario/CreateQuestionPhotoTest";
import { CreateFabricOptionQuestion } from "../pages/admin/crearFormulario/CreateFabricOptionQuestion";
import { EditTest } from "../pages/admin/crearFormulario/EditTest";
import { PerfilUser } from "../pages/user/User";
// import { Photographies } from "../pages/user/Photographies"
import { Colorimetry } from "../pages/user/Colorimetry";
import { History } from "../pages/user/History";
import { Cuestionario1 } from "../pages/Cuestionarios/Cuestionario1";
import { EditUser } from "../pages/user/editUser/EditUser";
import { Busqueda } from "../pages/user/busqueda/Busqueda";
import { AllProfessional } from "../pages/admin/allProfessional/AllProfessional";
import { AntesDeEmpezar } from "../pages/auth/inicio/AntesDeEmpezar";
import { AllTelas } from "../pages/admin/crearTela/AllTelas";
import { TestColorimetria } from "../pages/Cuestionarios/TestColorimetria";
import { OneTela } from "../pages/admin/crearTela/OneTela";
import { CameraComp } from "../components/compoCamara/CameraComp";
// import { TestPhoto } from "../pages/Cuestionarios/TestPhoto";
import { AllClients } from "../pages/admin/allClients/AllClients";
import { LandingProfessional } from "../pages/user/landingProfessional/LandingProfessional";
import { LandingClient } from "../pages/user/landingClient/LandingClient";
import { Visit } from "../components/visita/Visit";
import { TestTypeOne } from "../pages/Cuestionarios/TestTypeOne";
import { PerfilCliente } from "../pages/cliente/perfilCliente/PerfilCliente";
import { EditClient } from "../pages/cliente/editClient/EditClient";
import { EditAdminClient } from "../pages/admin/editAdminUsers/EditAdminClient";
import { EditAdminProfessional } from "../pages/admin/editAdminUsers/EditAdminProfessional";
import { TestOption } from "../pages/Cuestionarios/TestOption";
import { AllTestForClient } from "../pages/Cuestionarios/AllTestForClient";
import { Success } from "../pages/Cuestionarios/Success";
import { ResultTest } from "../pages/user/ResultTest";

export const AppRoutes = () => {
  return (
    <Container fluid>
      <BrowserRouter>
        <Routes>
          {/* GLOWUP WEB */}
          <Route path="/" element={<GlowUp />} />
          {/* PRIMER PASO ANTES DE ENTRAR */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/registerProfessional"
            element={<RegisterProfessional />}
          />
          {/* NODEMAILER */}
          <Route path="/reviewemail" element={<ReviewEmail />} />
          {/* LANDINGS */}
          <Route
            path="/landingProfessional"
            element={<LandingProfessional />}
          />
          <Route path="/landingClient" element={<LandingClient />} />
          <Route path="/homeAdmin" element={<InicioAdmin />} />
          <Route path="/editUser/:user_id" element={<EditUser />} />
          <Route
            path="/oneUserProfessional/:user_id"
            element={<VistaUserProfesional />}
          />
          {/* CRUD DE TELAS */}
          {/* <Route path="/createFabric" element={<CrearTela />} />  */}
          <Route path="/allFabric" element={<AllTelas />} />
          <Route path="/oneFabric/:fabric_id" element={<OneTela />} />
          {/* CREAR Y EDITAR TEST */}
          <Route path="/createForm" element={<CrearForm />} />
          <Route path="/test" element={<AllTests1 />} />
          <Route
            path="/createQuestionTest/:test_id/:test_name"
            element={<CreateQuestionTest />}
          />
          <Route
            path="/createQuestion_option/:test_name/:test_id"
            element={<CreateQuestionOptionTest />}
          />
          <Route
            path="/CreateFabricOptioQuestion/:test_name/:test_id"
            element={<CreateFabricOptionQuestion />}
          />
          <Route path="/EditTest/:test_id" element={<EditTest />} />
          {/* HACER TEST */}
          <Route
            path="/allTestClient/:user_id"
            element={<AllTestForClient />}
          />
          <Route path="/Testcolorai/:type" element={<TestColorimetria />} />
          <Route
            path="/testTypeOne/:test_id/:user_id"
            element={<TestTypeOne />}
          />
          <Route
            path="/testOption/:test_id/:user_id"
            element={<TestOption />}
          />
          <Route path="/Success" element={<Success />} />
          {/* VISTA CLIENTE DESDE PROF */}
          <Route path="/oneUser/:id" element={<PerfilUser />}>
            <Route path="photographies" element={<CameraVisor />} />
            <Route path="resultTest" element={<ResultTest />} />
            <Route path="colorimetry" element={<Colorimetry />} />
            <Route path="history" element={<History />} />
            <Route path="visit" element={<Visit />} />
          </Route>
          <Route path="/search" element={<Busqueda />} />
          <Route path="/allProfessional" element={<AllProfessional />} />
          <Route path="/allClients" element={<AllClients />} />
          <Route path="/antesdeEmpezar" element={<AntesDeEmpezar />} />
          <Route path="/perfilCliente/:user_id" element={<PerfilCliente />} />
          <Route path="/allClients" element={<AllClients />} />
          <Route path="/editClient/:user_id" element={<EditClient />} />
          <Route
            path="/editAdminClient/:user_id"
            element={<EditAdminClient />}
          />
          <Route
            path="/editAdminProfessional/:user_id"
            element={<EditAdminProfessional />}
          />
          <Route
            path="/oneUserProfessional"
            element={<VistaUserProfesional />}
          />
          <Route path="/homeUser" element={<HomeUser />} />
        </Routes>

        {/* REVISION PARA BORRAR */}
        {/* <Route path="/cameravisor" element={<CameraVisor />} /> */}
        {/* <Route path="/cuestionario1" element={<Cuestionario1 />} /> */}
        {/* <Route path="/CreatePhotoQuestionTest/:test_name/:test_id" element={<CreatePhotoQuestionTest />}/> */}
        {/* <Route path='/TestPhoto/:type' element={<TestPhoto />} /> */}
        {/* <Route path="/cameravisor" element={<CameraVisor />} /> */}
        {/* <Route path="/CompoCamara" element={<CameraComp />} /> */}
        {/* <Route path="/createProfessional" element={<CrearProfessional />} />
          <Route path="/homeUser" element={<HomeUser />} /> */}
        {/* <Route path="/fotorealizada" element={<FotoRealizada />} />
          <Route path="/vistafotos" element={<FotosDetalles />} />
          <Route path="/modalconfirmacion" element={<ModalConfirmacion />} />
          <Route path="/modalcolorimetria" element={<ProcesoColorimetria />} />
          <Route path="/modalrepetirproceso" element={<RepetirProceso />} />
          <Route path="/contraste" element={<Contraste />} />
          <Route path="/contrastepersonal" element={<ContrastePersonal />} /> */}
      </BrowserRouter>
    </Container>
  );
};
