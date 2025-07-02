import { useEffect } from "react";
import storeProfile from "../../context/storeProfile.jsx";
import { useForm } from "react-hook-form";

const FormularioPerfil = () => {
    const { user, updateProfile } = storeProfile();
    const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm();

    const updateUser = async (data) => {
        await updateProfile(data, user._id);
    };

    useEffect(() => {
        if (user) {
            reset({
                nombre: user?.nombre,
                apellido: user?.apellido,
                direccion: user?.direccion,
                celular: user?.celular,
                email: user?.email,
            })
        }
    }, [user])

    return (
        <form onSubmit={handleSubmit(updateUser)} autoComplete="off">
            <div>
                <label className="mb-2 block text-sm font-semibold">Nombre</label>
                <input
                    type="text"
                    placeholder="Ingresa tu nombre"
                    className="block w-full rounded-md border border-gray-300 py-1 px-2 text-gray-500 mb-2"
                    {...register("nombre", { required: "El nombre es obligatorio" })}
                />
                {errors.nombre && <p className="text-red-800">{errors.nombre.message}</p>}
            </div>
            <div>
                <label className="mb-2 block text-sm font-semibold">Apellido</label>
                <input
                    type="text"
                    placeholder="Ingresa tu apellido"
                    className="block w-full rounded-md border border-gray-300 py-1 px-2 text-gray-500 mb-2"
                    {...register("apellido", { required: "El apellido es obligatorio" })}
                />
                {errors.apellido && <p className="text-red-800">{errors.apellido.message}</p>}
            </div>
            <div>
                <label className="mb-2 block text-sm font-semibold">Dirección</label>
                <input
                    type="text"
                    placeholder="Ingresa tu dirección"
                    className="block w-full rounded-md border border-gray-300 py-1 px-2 text-gray-500 mb-2"
                    {...register("direccion", { required: "La dirección es obligatoria" })}
                />
                {errors.direccion && <p className="text-red-800">{errors.direccion.message}</p>}
            </div>
            <div>
                <label className="mb-2 block text-sm font-semibold">Celular</label>
                <input
                    type="number"
                    placeholder="Ingresa tu celular"
                    className="block w-full rounded-md border border-gray-300 py-1 px-2 text-gray-500 mb-2"
                    {...register("celular", { required: "El celular es obligatorio" })}
                />
                {errors.celular && <p className="text-red-800">{errors.celular.message}</p>}
            </div>
            <div>
                <label className="mb-2 block text-sm font-semibold">Correo electrónico</label>
                <input
                    type="email"
                    placeholder="Ingresa tu correo"
                    className="block w-full rounded-md border border-gray-300 py-1 px-2 text-gray-500 mb-2"
                    {...register("email", { required: "El correo es obligatorio" })}
                />
                {errors.email && <p className="text-red-800">{errors.email.message}</p>}
            </div>
            <input
                type="submit"
                disabled={isSubmitting}
                className="bg-gray-800 w-full p-2 mt-4 text-slate-300 uppercase font-bold rounded-lg hover:bg-gray-600 cursor-pointer transition-all"
                value={isSubmitting ? "Actualizando..." : "Actualizar"}
            />
        </form>
    );
};

export default FormularioPerfil;