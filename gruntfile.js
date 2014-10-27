module.exports = function (grunt) {
    grunt.initConfig({
        watch: {
            src: {
                files: ['**/*.scss', '**/*.html'],
                tasks: ['compass:dev']
            },
        },
        compass: {
            dev: {
                options: {
                    sassDir: 'sass',
                    cssDir: 'stylesheets',
                    imagesPath: 'images',
                    noLineComments: false,
                    outputStyle: 'compressed'
                }
            }
        },
        concat: {
          options: {
            separator: ';'
          },
          dist: {
            src: ['javascripts/bootstrap.js', 'javascripts/jquery.shuffle.modernizr.js', 'javascripts/jquery.shuffle.min.js', 'javascripts/marfed.js', 'javascripts/jquery.elevateZoom-3.0.8.min.js', 'javascripts/Gallery.js'],
            dest: 'javascripts/global.js'
          }
        },
        uglify: {
          dist: {
            files: {
              'javascripts/global.min.js': ['<%= concat.dist.dest %>']
            }
          }
        },
        browserSync: {
            bsFiles: {
                src : 'stylesheets/*.css'
            },
            options: {
                server: {
                    baseDir: "./"
                },
                watchTask: true
            }
        }
    });

    // load npm tasks
    grunt.loadNpmTasks('grunt-contrib-compass');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-browser-sync');


    // define default task
    grunt.registerTask('default', ["browserSync", "concat", "uglify", "watch"]);
};