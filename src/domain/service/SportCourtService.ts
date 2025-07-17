import prisma from '../../prismaClient';
import SportCourt from '../models/Sport_Court';

const getAllSportCourts = async (): Promise<SportCourt[]> => {
    try {
      const sportCourts = await prisma.sport_Court.findMany();
      return sportCourts.map((sc: { id: number; name: string; reservated: boolean; description: string | null; size: string; location: string; start_datetime: Date; end_datetime: Date; price: { toNumber: () => number; }; }) => mapSportCourtToModel(sc));
    } catch (error) {
      console.error("Erro ao buscar todas as quadras esportivas:", error);
      throw error; 
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
      price: price.toString(), 
    },
  });
  return mapSportCourtToModel(sportCourt);
};

const getSportCourts = async (query: any): Promise<any> => {
  const { page = '1', limit = '10', name, location, size, start_datetime, end_datetime } = query;

  const filters: any = {};
  if (name) {
    filters.name = { contains: name, mode: 'insensitive' };
  }
  if (location) {
    filters.location = { contains: location, mode: 'insensitive' };
  }
  if (size) {
    filters.size = size;
  }
  if (start_datetime) {
    filters.start_datetime = { gte: new Date(start_datetime) };
  }
  if (end_datetime) {
    filters.end_datetime = { lte: new Date(end_datetime) };
  }

  const pageNumber = parseInt(page, 10);
  const limitNumber = parseInt(limit, 10);
  const skip = (pageNumber - 1) * limitNumber;

  try {
    const [data, total] = await prisma.$transaction([
      prisma.sport_Court.findMany({
        where: filters,
        skip: skip,
        take: limitNumber,
      }),
      prisma.sport_Court.count({
        where: filters,
      }),
    ]);

    const totalPages = Math.ceil(total / limitNumber);

    return {
      data: data.map((sc) => mapSportCourtToModel(sc)),
      total,
      totalPages,
      currentPage: pageNumber,
    };
  } catch (error) {
    console.error("Erro ao buscar quadras esportivas com filtros e paginação:", error);
    throw error;
  }
};


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
    data.price.toNumber(), 
  );
};

export { getAllSportCourts, getSportCourtById, createSportCourt, getSportCourts };
