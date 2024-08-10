import { DisasterStatus } from "@prisma/client";
import { z } from "zod";

const addDisasterZ = z.object({
  name: z.string().min(3, { message: "Name must be at least 3 characters" }),
  intensity: z
    .number()
    .refine((intensity) => intensity >= 0 && intensity <= 100, {
      message: "Intensity must be between 0 and 100",
    }),
});

const getDisasterZ = z.object({
  id: z.string(),
});

const updateDisasterZ = z.object({
  id: z.string(),
  name: z.string(),
  intensity: z
    .number()
    .refine((intensity) => intensity >= 0 && intensity <= 100, {
      message: "Intensity must be between 0 and 100",
    }),
});

const deleteDisasterZ = z.object({
  id: z.string(),
});

const getAllDisasterAlertsZ = z.object({
  status: z
    .nativeEnum(DisasterStatus)
    .or(z.array(z.nativeEnum(DisasterStatus))),
  location: z.string(),
});

const addDisasterReportNewZ = z.object({
  disasterId: z.string(),
  location: z.string(),
  description: z.string(),
  status: z.nativeEnum(DisasterStatus),
});

const addDisasterReportExistingZ = z.object({
  description: z.string(),
  status: z.nativeEnum(DisasterStatus),
  disasterAlertId: z.string(),
});

export {
  addDisasterZ,
  getDisasterZ,
  updateDisasterZ,
  deleteDisasterZ,
  getAllDisasterAlertsZ,
  addDisasterReportNewZ,
  addDisasterReportExistingZ,
};
