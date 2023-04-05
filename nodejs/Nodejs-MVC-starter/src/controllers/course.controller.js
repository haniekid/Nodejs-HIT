const { Course } = require('../models')

const viewCourses = async (req, res) => {
  try {
    const courses = await Course.find({})

    res.render('courses', {
      courses,
      title: 'Tất cả khóa học'
    })
  } catch (error) {
    res.status(500).send('INTERNAL SERVER ERROR')
  }
}

const viewCreateCourse = async (req, res) => {
  res.render('createCourse', {
    title: 'Tạo khóa học'
  })
}

const createCourse = async (req, res) => {
  const { name, description } = req.body

  try {
    const newCourse = await Course.create({
      name,
      description,
    })

    const courses = await Course.find({})
    res.render('courses', {
      courses,
      title: 'Tất cả khóa học'
    })
  } catch (error) {
    res.status(500).send('INTERNAL SERVER ERROR')
  }
}

module.exports = {
  viewCourses,
  viewCreateCourse,
  createCourse,
}
