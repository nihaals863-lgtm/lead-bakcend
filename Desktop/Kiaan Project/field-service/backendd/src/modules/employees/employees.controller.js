const employeesService = require('./employees.service');

const getAll = async (req, res, next) => {
  try {
    const employees = await employeesService.getAll(req.query);
    res.json(employees);
  } catch (error) {
    next(error);
  }
};

const create = async (req, res, next) => {
  try {
    const employee = await employeesService.create(req.body);
    res.status(201).json(employee);
  } catch (error) {
    next(error);
  }
};

const getAllTimesheets = async (req, res, next) => {
  try {
    const timesheets = await employeesService.getAllTimesheets();
    res.json(timesheets);
  } catch (error) {
    next(error);
  }
};

const updateTimesheetStatus = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { status } = req.body;
    const timesheet = await employeesService.updateTimesheetStatus(id, status);
    res.json(timesheet);
  } catch (error) {
    next(error);
  }
};

module.exports = { getAll, create, getAllTimesheets, updateTimesheetStatus };
