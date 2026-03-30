const jobsService = require('./jobs.service');

const getAll = async (req, res, next) => {
  try {
    const jobs = await jobsService.getAll(req.user, req.query);
    res.json(jobs);
  } catch (error) {
    next(error);
  }
};

const getById = async (req, res, next) => {
  try {
    const job = await jobsService.getById(req.params.id);
    if (!job) return res.status(404).json({ message: 'Job not found' });
    res.json(job);
  } catch (error) {
    next(error);
  }
};

const assignTechnician = async (req, res, next) => {
  try {
    const job = await jobsService.assignTechnician(req.params.id, req.body.employeeId);
    res.json(job);
  } catch (error) {
    next(error);
  }
};

const create = async (req, res, next) => {
  try {
    const job = await jobsService.create(req.body);
    res.status(201).json(job);
  } catch (error) {
    next(error);
  }
};

const update = async (req, res, next) => {
  try {
    const job = await jobsService.update(req.params.id, req.body);
    res.json(job);
  } catch (error) {
    next(error);
  }
};

const updateStatus = async (req, res, next) => {
  try {
    const job = await jobsService.updateStatus(req.params.id, req.body.status);
    res.json(job);
  } catch (error) {
    next(error);
  }
};

const remove = async (req, res, next) => {
  try {
    await jobsService.remove(req.params.id);
    res.status(204).send();
  } catch (error) {
    next(error);
  }
};

const addNote = async (req, res, next) => {
  try {
    const note = await jobsService.addNote(req.params.id, req.body.content);
    res.status(201).json(note);
  } catch (error) {
    next(error);
  }
};

const addPhoto = async (req, res, next) => {
  try {
    const photo = await jobsService.addPhoto(req.params.id, req.body.url);
    res.status(201).json(photo);
  } catch (error) {
    next(error);
  }
};

module.exports = { getAll, getById, create, update, updateStatus, addNote, addPhoto, assignTechnician, remove };
