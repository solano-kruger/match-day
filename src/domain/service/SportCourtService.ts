import prisma from '../../prismaClient';
import SportCourt from '../models/Sport_Court';

const getAllSportCourts = async (): Promise<SportCourt[]> => {
    try {
      const sportCourts = await prisma.sport_Court.findMany();
      return sportCourts.map((sc: { id: number; name: string; reservated: boolean; description: string | null; size: string; location: string; start_datetime: Date; end_datetime: Date; price: { toNumber: () => number; }; }) => mapSportCourtToModel(sc));
    } catch (error) {
      console.error("Erro ao buscar todas as quadras esportivas:", error);
      throw error; // Rejeita a Promessa para repassar o erro para quem chamou esta função
    }
  };

const getSportCourtById = async (id: number): Promise<SportCourt | null> => {
  const sportCourt = await prisma.sport_Court.findUnique({ where: { id } });
  if (sportCourt) {
    return mapSportCourtToModel(sportCourt);
  }
  return null;
};

const createSportCourt = async (
  name: string,
  reservated: boolean,
  description: string | null,
  size: string,
  location: string,
  start_datetime: Date,
  end_datetime: Date,
  price: number,
): Promise<SportCourt> => {
  const sportCourt = await prisma.sport_Court.create({
    data: {
      name,
      reservated,
      description,
      size,
      location,
      start_datetime,
      end_datetime,
      price: price.toString(), // Convertendo number para string
    },
  });
  return mapSportCourtToModel(sportCourt);
};

// Função auxiliar para mapear dados do Prisma para o modelo SportCourt
const mapSportCourtToModel = (data: {
  id: number;
  name: string;
  reservated: boolean;
  description: string | null;
  size: string;
  location: string;
  start_datetime: Date;
  end_datetime: Date;
  price: { toNumber: () => number };
}): SportCourt => {
  return new SportCourt(
    data.id,
    data.name,
    data.reservated,
    data.description,
    data.size,
    data.location,
    data.start_datetime,
    data.end_datetime,
    data.price.toNumber(), // Convertendo Decimal para number
  );
};

export { getAllSportCourts, getSportCourtById, createSportCourt };
