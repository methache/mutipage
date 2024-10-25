const users = [{
    user: 'user',
      pass: 'pass',
      role:  'admin',
      token: 'user',
    }]
    export function verifyUser(user, pass) {
            const userFond = users.find((u) => {
                return u.user === user && u.pass === pass
        })
          return userFond ? { role: userFond.role, 
          token: userFond.token } : null
    }